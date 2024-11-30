import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-accent2 p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Pentesting Website</h1>
      <div className="bg-primary p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-2 text-center text-white pb-6">Open Redirect Test</h2>
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
        <button className="bg-secondary text-black px-4 py-2 rounded hover:bg-blue-600 w-full mt-3">
            <Link to="/confirmation">Login</Link>
        </button>
      </div>
    </div>
  );
}

export default App;