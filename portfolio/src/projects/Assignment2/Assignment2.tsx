import React from 'react';

const Assignment2: React.FC = () => {
  // Replace these URLs with your actual deployed project URLs
  const projectLiveUrl = "https://learning-projects-one.vercel.app/";
  const projectGithubUrl = "https://github.com/heavidevi/Learning-Projects";

  return (
    <div className="assignment2-wrapper min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Project Header */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg mb-8">
          <h1 className="text-4xl font-bold mb-4">Assignment 2</h1>
          <p className="text-xl opacity-90 mb-4">
            Advanced React and Backend Integration Project
          </p>
          <p className="opacity-75 mb-6">
            A full-stack application demonstrating modern web development practices with React frontend and robust backend integration.
          </p>
          
          {/* Action Buttons */}
          <div className="flex gap-4 flex-wrap">
            <a
              href={projectLiveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
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
            <h2 className="text-2xl font-semibold mb-4">🛠️ Technologies Used</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• React.js with TypeScript</li>
              <li>• Node.js & Express.js</li>
              <li>• MongoDB / PostgreSQL</li>
              <li>• REST API / GraphQL</li>
              <li>• Tailwind CSS</li>
              <li>• Authentication & Authorization</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">✨ Key Features</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• User Authentication</li>
              <li>• CRUD Operations</li>
              <li>• Real-time Updates</li>
              <li>• Responsive Design</li>
              <li>• API Integration</li>
              <li>• Database Management</li>
            </ul>
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

export default Assignment2;
