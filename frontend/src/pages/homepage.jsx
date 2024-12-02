import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 className="text-4xl font-bold text-gray-800">Homepage</h1>
    <p className="mt-4 text-gray-600">
      This site demonstrates DoS and Open Redirect vulnerability for educational purposes.
    </p>
    <div className="mt-6">
      <Link to="/dumb">
        <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          Go to Dummy Page
        </button>
      </Link>
    </div>
  </div>
);

export default Homepage;