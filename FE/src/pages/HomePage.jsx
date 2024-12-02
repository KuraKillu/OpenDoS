import React, { useEffect, useState } from 'react';

function HomePage() {
  const [redirectUrl, setRedirectUrl] = useState('');

  useEffect(() => {
    // Fetch the redirect_url from the server
    fetch('/api/redirect_url')
      .then(response => response.json())
      .then(data => setRedirectUrl(data.redirect_url))
      .catch(error => console.error('Error fetching redirect_url:', error));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Pentesting Website</h1>
      <div className="bg-gray-500 p-2 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-2 text-center text-white">Open Redirect Test</h2>
        <div className="flex justify-center">
          <a href={redirectUrl} className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-700">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;