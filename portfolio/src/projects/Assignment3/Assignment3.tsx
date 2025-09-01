import React from 'react';

const Assignment3: React.FC = () => {
  // Replace these URLs with your actual deployed project URLs
  const projectLiveUrl = "https://recipe-book-app-pearl.vercel.app/";
  const projectGithubUrl = "https://github.com/heavidevi/Recipe-Book-App";

  return (
    <div className="assignment3-wrapper min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Project Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg mb-8">
          <h1 className="text-4xl font-bold mb-4">Assignment 3</h1>
          <p className="text-xl opacity-90 mb-4">
            Full-Stack MERN Application
          </p>
          <p className="opacity-75 mb-6">
            A complete full-stack application built with MongoDB, Express.js, React, and Node.js, demonstrating modern web development with database integration, user authentication, and real-time features.
          </p>
          
          {/* Action Buttons */}
          <div className="flex gap-4 flex-wrap">
            <a
              href={projectLiveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              🚀 View Live Project
            </a>
            <a
              href={projectGithubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
            >
              📂 View Source Code
            </a>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">🛠️ MERN Stack Technologies</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• <strong>MongoDB</strong> - NoSQL Database</li>
              <li>• <strong>Express.js</strong> - Backend Framework</li>
              <li>• <strong>React.js</strong> - Frontend Library</li>
              <li>• <strong>Node.js</strong> - Runtime Environment</li>
              <li>• JWT Authentication</li>
              <li>• Mongoose ODM</li>
              <li>• RESTful APIs</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">✨ Advanced Features</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• User Registration & Login</li>
              <li>• Protected Routes</li>
              <li>• CRUD Operations</li>
              <li>• File Upload</li>
              <li>• Search & Filtering</li>
              <li>• Real-time Updates</li>
              <li>• Responsive UI</li>
            </ul>
          </div>
        </div>

        {/* Architecture Overview */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">🏗️ Application Architecture</h2>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-2">Frontend</h3>
              <p className="text-sm text-gray-600">React Components, State Management, Routing</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-700 mb-2">Backend</h3>
              <p className="text-sm text-gray-600">Express Server, API Routes, Middleware</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-700 mb-2">Database</h3>
              <p className="text-sm text-gray-600">MongoDB, Collections, Schemas</p>
            </div>
          </div>
        </div>

        {/* Project Screenshots/Demo */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">📸 Project Preview</h2>
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <p className="text-gray-500 mb-4">
              Add screenshots or embed demo here
            </p>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Screenshot Placeholder</span>
            </div>
          </div>
        </div>

        {/* Back to Portfolio */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            ← Back to Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Assignment3;
