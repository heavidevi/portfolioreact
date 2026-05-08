"use client";

import { motion } from "framer-motion";

const CONTACT_ITEMS = [
  {
    icon: "✉",
    label: "aliadeel2k19@gmail.com",
    href: "mailto:aliadeel2k19@gmail.com",
  },
  {
    icon: "📱",
    label: "+92 331 210 2587",
    href: "tel:+923312102587",
  },
  {
    icon: "📍",
    label: "Karachi, Pakistan · Remote-first",
    href: null,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2
          className="leading-[0.9] tracking-wide"
          style={{
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: "clamp(48px, 7vw, 88px)",
          }}
        >
          LET&apos;S
          <br />
          BUILD
          <br />
          <span style={{ color: "#D2FF00" }}>THINGS.</span>
        </h2>
      </motion.div>

      {/* Info */}
      <motion.div
        className="flex flex-col gap-4"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        {CONTACT_ITEMS.map((item) =>
          item.href ? (
            <a
              key={item.label}
              href={item.href}
              className="contact-item"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span style={{ color: "#D2FF00", fontSize: "16px" }}>{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ) : (
            <div key={item.label} className="contact-item">
              <span style={{ color: "#D2FF00", fontSize: "16px" }}>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          )
        )}

        <motion.a
          href="mailto:aliadeel2k19@gmail.com"
          className="btn-brutal mt-2 self-start"
          whileHover={{ x: -2, y: -2, boxShadow: "6px 6px 0 #000" }}
          whileTap={{ x: 2, y: 2, boxShadow: "2px 2px 0 #000" }}
        >
          Send a Message ↗
        </motion.a>
      </motion.div>
    </section>
  );
}
