import React from 'react';

const GuestHouse: React.FC = () => {
  // Replace these URLs with your actual deployed project URLs
  const projectLiveUrl = "https://guesthouse-website-mu.vercel.app/";
  const projectGithubUrl = "https://github.com/heavidevi/Guesthouse-Website";

  return (
    <div className="guest-house-wrapper min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Project Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-lg mb-8">
          <h1 className="text-4xl font-bold mb-4">Guest House</h1>
          <p className="text-xl opacity-90 mb-4">
            Hotel & Hospitality Management System
          </p>
          <p className="opacity-75 mb-6">
            A comprehensive guest house management application featuring booking systems, room management, customer service, and administrative tools for hospitality businesses.
          </p>
          
          {/* Action Buttons */}
          <div className="flex gap-4 flex-wrap">
            <a
              href={projectLiveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
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
              <li>• MongoDB / MySQL</li>
              <li>• Payment Integration</li>
              <li>• Email Notifications</li>
              <li>• Calendar Integration</li>
              <li>• Responsive Design</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">🏨 Key Features</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Room Booking System</li>
              <li>• Customer Management</li>
              <li>• Check-in/Check-out</li>
              <li>• Payment Processing</li>
              <li>• Availability Calendar</li>
              <li>• Guest Reviews</li>
              <li>• Admin Dashboard</li>
            </ul>
          </div>
        </div>

        {/* Business Features */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">🏢 Business Management Tools</h2>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h3 className="font-semibold text-emerald-700 mb-2">Reservations</h3>
              <p className="text-sm text-gray-600">Online booking, calendar management, availability tracking</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-2">Guest Services</h3>
              <p className="text-sm text-gray-600">Customer profiles, preferences, service requests</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-700 mb-2">Analytics</h3>
              <p className="text-sm text-gray-600">Revenue tracking, occupancy rates, performance metrics</p>
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
            className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
          >
            ← Back to Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default GuestHouse;