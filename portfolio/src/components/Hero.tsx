import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 py-12">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-4 text-center drop-shadow-lg">
        Ali ADEEL
      </h1>
      <h2 className="text-2xl font-semibold text-purple-700 mb-2 text-center">
        Aspiring MERN Stack Developer
      </h2>
      <p className="max-w-xl text-lg text-gray-700 text-center mb-6">
        Passionate about building modern web applications using MongoDB, Express, React, and Node.js. Eager to learn, collaborate, and create impactful digital experiences. Always exploring new technologies and best practices in full-stack development.
      </p>
      <div className="flex gap-4">
        <a href="#projects" className="px-6 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition">View Projects</a>
        <a href="#contact" className="px-6 py-2 bg-white border border-purple-600 text-purple-600 rounded-lg shadow hover:bg-purple-50 transition">Contact Me</a>
      </div>
    </section>
  );
};

export default Hero;
