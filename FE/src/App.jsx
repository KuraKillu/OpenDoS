import React, { useState } from 'react';

function App() {
  const [redirectUrl, setRedirectUrl] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRedirect = () => {
    window.location.href = redirectUrl; // Simulates an open redirect vulnerability
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Pentesting Website</h1>
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md mb-6">
        <h2 className="text-xl font-semibold mb-2 text-center">Open Redirect Test</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <button onClick={handleRedirect} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full mt-3">
          Redirect
        </button>
      </div>
    </div>
  );
}

export default App;