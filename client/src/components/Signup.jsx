import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState(''); // State for bio text
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:5555/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password, bio }), // Include bio in the payload
      });

      if (!response.ok) {
        throw new Error('Failed to sign up');
      }

      console.log('User signed up successfully');
      // Redirect to the home page after successful signup
      window.location.href = '/home'; // Replace with the actual URL of your home page
    } catch (error) {
      console.error('Error signing up:', error);
      setError('Failed to sign up');
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <h2 className="title">Sign Up</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="inputWrapper">
          <label htmlFor="username" className="label">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="inputWrapper">
          <label htmlFor="email" className="label">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="inputWrapper">
          <label htmlFor="password" className="label">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="inputWrapper">
          <label htmlFor="bio" className="label">Bio:</label>
          <textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="input"
            rows="3" // Adjust the number of rows as needed
          ></textarea>
        </div>
        {!isLoading ? (
          <button type="submit" className="button">Sign Up</button>
        ) : (
          <div className="loading-animation"></div>
        )}
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Signup;
