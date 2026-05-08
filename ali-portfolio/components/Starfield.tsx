"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

type StarfieldProps = {
  starCount?: number;
  neonRatio?: number; // fraction of stars that are neon green
  maxScroll?: number; // px that maps to full vortex progress
};

// High-performance Three.js starfield using a single BufferGeometry + ShaderMaterial
// - idle: slow drift
// - scroll: maps window scroll to vortex progress (0..1)
// - lightweight: single drawcall, point sprites with a procedural radial glow

export default function Starfield({ starCount = 5000, neonRatio = 0.03, maxScroll = 1000 }: StarfieldProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const reqRef = useRef<number | null>(null);
  const uniformsRef = useRef<any>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    
    // guard: don't remount if canvas already exists
    if (mountRef.current.querySelector("canvas")) return;

    // honor reduced motion
    const prefersReduced = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const width = mountRef.current.clientWidth || 512;
    const height = mountRef.current.clientHeight || 512;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    } catch (e) {
      // WebGL not available, render nothing gracefully
      console.warn("[Starfield] WebGL not available", e);
      return;
    }
    
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    renderer.setSize(width, height, false);
    mountRef.current.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 2000);
    camera.position.set(0, 0, 600);

    // create buffer geometry
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const aOffset = new Float32Array(starCount * 2); // polar coords (r, theta)
    const aSeed = new Float32Array(starCount); // per-star seed
    const aColorFlag = new Float32Array(starCount); // 0 = white, 1 = neon

    // fill random distribution in a disc with some z variance
    const R = Math.max(width, height) * 0.6; // spread radius
    for (let i = 0; i < starCount; i++) {
      // distribute r with sqrt for even density
      const r = Math.sqrt(Math.random()) * R;
      const theta = Math.random() * Math.PI * 2;
      const x = Math.cos(theta) * r;
      const y = Math.sin(theta) * r;
      const z = (Math.random() - 0.5) * 200; // slight depth
      positions[i * 3 + 0] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      aOffset[i * 2 + 0] = r;
      aOffset[i * 2 + 1] = theta;
      aSeed[i] = Math.random() * 1000;
      aColorFlag[i] = Math.random() < neonRatio ? 1.0 : 0.0;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("aOffset", new THREE.BufferAttribute(aOffset, 2));
    geometry.setAttribute("aSeed", new THREE.BufferAttribute(aSeed, 1));
    geometry.setAttribute("aColorFlag", new THREE.BufferAttribute(aColorFlag, 1));

    const vertexShader = `
      attribute vec2 aOffset;
      attribute float aSeed;
      attribute float aColorFlag;
      uniform float uTime;
      uniform float uProgress; // 0..1 from scroll
      uniform float uSize;
      uniform float uPull; // how much radial pull at progress=1
      varying float vColorFlag;
      varying float vDepth;

      // simple 2D rotation
      mat2 rot(float a) {
        float c = cos(a);
        float s = sin(a);
        return mat2(c, -s, s, c);
      }

      void main() {
        vColorFlag = aColorFlag;
        // reconstruct base polar coords
        float r = aOffset.x;
        float theta = aOffset.y;

        // subtle idle drift
        float idle = uTime * 0.02 + aSeed * 0.001;
        theta += idle * 0.1;

        // apply vortex rotation scaled by progress and distance
        // exponential vortex speed: boost multiplier for dramatic effect
        float spin = (1.0 - smoothstep(0.0, 600.0, r/1.0)) * (0.5 + r*0.001) * (0.8 + uProgress*8.0);
        theta += spin * uProgress * 8.0; // strong exponential speed

        // radial pull towards center as progress increases - dramatic
        float pullFactor = mix(1.0, 0.05, smoothstep(0.0, 1.0, uProgress * uPull));
        float rr = r * pullFactor;

        vec2 pos = vec2(cos(theta)*rr, sin(theta)*rr);

        // small z-bobbing for depth
        float z = 0.0; // use mesh position z replaced by original attribute
        // project
        vec4 mvPosition = modelViewMatrix * vec4(pos.x, pos.y, 0.0, 1.0);
        gl_Position = projectionMatrix * mvPosition;

        // size falloff by distance
        float dist = length(pos);
        float size = uSize * (1.0 - clamp(dist / 1200.0, 0.0, 0.9));
        gl_PointSize = size * (300.0 / -mvPosition.z);
        vDepth = -mvPosition.z;
      }
    `;

    const fragmentShader = `
      precision highp float;
      varying float vColorFlag;
      varying float vDepth;
      uniform vec3 uColorWhite;
      uniform vec3 uColorNeon;
      uniform float uTime;

      void main() {
        // radial gradient inside the point
        vec2 uv = gl_PointCoord - 0.5;
        float dist = length(uv);
        // center brightness ramp
        float alpha = smoothstep(0.0, 0.5, 0.5 - dist);
        // soft halo
        float halo = pow(1.0 - dist, 6.0);
        // flicker tiny
        float flick = 0.9 + 0.1 * sin(uTime * 3.0 + vDepth * 0.01);
        vec3 base = mix(uColorWhite, uColorNeon, vColorFlag);
        vec3 col = base * (alpha * 1.2 + halo * 0.8) * flick;
        // thin glare for neon centers
        float glare = smoothstep(0.0, 0.02, 0.02 - dist);
        if (vColorFlag > 0.5) {
          col += vec3(0.7, 1.0, 1.0) * glare * 1.6;
        }
        gl_FragColor = vec4(col, clamp(alpha + halo * 0.6, 0.0, 1.0));

        // discard very transparent pixels for crisp edges
        if (gl_FragColor.a < 0.01) discard;
      }
    `;

    uniformsRef.current = {
      uTime: { value: 0 },
      uProgress: { value: 0 },
      uSize: { value: 6.0 },
      uPull: { value: 1.0 },
      uColorWhite: { value: new THREE.Color(0xffffff) },
      uColorNeon: { value: new THREE.Color("#D2FF00") },
    };

    const material = new THREE.ShaderMaterial({
      uniforms: uniformsRef.current,
      vertexShader,
      fragmentShader,
      transparent: true,
      depthTest: true,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // subtle slow rotation of the entire field
    let start = performance.now();

    // scroll mapping - poll window.scrollY in animation loop
    let lastScrollY = 0;
    let lastScrollTime = 0; // track last scroll time for idle detection
    const scrollIdleThreshold = 500; // ms before considering idle
    
    // vortex should end when viewport is only 80% left (20% scrolled)
    const viewportHeight = window.innerHeight || 800;
    const heroSectionHeight = mountRef.current?.offsetHeight || 600;
    const scrollDistanceFor20Percent = heroSectionHeight * 0.6; // adjusted for 80% viewport remaining

    // resize handling
    const onResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    };

    resizeObserverRef.current = new ResizeObserver(onResize);
    resizeObserverRef.current.observe(mountRef.current);

    function animate(now: number) {
      const t = (now - start) * 0.001;
      uniformsRef.current.uTime.value = t;
      
      // poll window.scrollY directly in animation loop
      const y = window.scrollY || window.pageYOffset || 0;
      
      // calculate scroll progress: vortex ends when viewport is 80% left
      const heroViewportProgress = Math.max(0, y / scrollDistanceFor20Percent);
      const scrollProgress = Math.max(0, Math.min(1, heroViewportProgress));
      
      uniformsRef.current.uProgress.value = scrollProgress;
      
      // update last scroll time when scroll changes
      if (y !== lastScrollY) {
        lastScrollY = y;
        lastScrollTime = now;
      }
      
      // idle drift if reduced motion
      if (prefersReduced) {
        // keep progress but do not animate heavy motion
      } else {
        // rotation: orbit + slight tilt when idle, vortex when scrolling
        const timeSinceLastScroll = now - lastScrollTime;
        const isIdle = timeSinceLastScroll > scrollIdleThreshold;
        
        if (isIdle) {
          // gentle orbit when idle: z-axis rotation + x/y wobble for orbital motion
          points.rotation.z = t * 0.01; // subtle 0.01 rad/s rotation around z
          points.rotation.x = Math.sin(t * 0.005) * 0.03; // slight tilt x
          points.rotation.y = Math.cos(t * 0.004) * 0.03; // slight tilt y (orbital effect)
        } else {
          // during scroll, reset x/y to prevent conflict with vortex
          points.rotation.x = 0;
          points.rotation.y = 0;
          points.rotation.z = 0; // vortex is handled by shader
        }
      }

      renderer.render(scene, camera);
      reqRef.current = requestAnimationFrame(animate);
    }

    reqRef.current = requestAnimationFrame(animate);

    // initial resize
    onResize();

    // cleanup
    return () => {
      if (reqRef.current) cancelAnimationFrame(reqRef.current);
      if (resizeObserverRef.current && mountRef.current) resizeObserverRef.current.unobserve(mountRef.current);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (mountRef.current && renderer.domElement.parentElement === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [starCount, neonRatio, maxScroll]);

  return <div ref={mountRef} className="pointer-events-none w-full h-full" style={{ minHeight: 300 }} />;
}
