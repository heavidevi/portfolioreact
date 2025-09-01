import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";

const Assignment1 = () => {
  return (
    <div className="assignment1-showcase min-h-screen bg-white">
      {/* Project Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Assignment 1</h1>
          <p className="text-xl opacity-90">Business Website Showcase</p>
          <p className="mt-2 opacity-75">A complete business website with modern design and functionality</p>
        </div>
      </div>

      {/* Home Section */}
      <section id="home" className="border-b border-gray-200">
        <Home />
      </section>

      {/* About Section */}
      <section id="about" className="border-b border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Section</h2>
          <About />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="border-b border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Services Section</h2>
          <Services />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="border-b border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Pricing Section</h2>
          <Pricing />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Section</h2>
          <Contact />
        </div>
      </section>

      {/* Back to Portfolio Button */}
      <div className="fixed bottom-6 right-6">
        <a
          href="/"
          className="bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-purple-700 transition"
        >
          ← Back to Portfolio
        </a>
      </div>
    </div>
  );
};

export default Assignment1;