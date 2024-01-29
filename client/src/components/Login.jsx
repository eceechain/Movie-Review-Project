import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Start the loading animation

    setTimeout(() => {
      // Simulate a delay for the login process
      console.log('Submitted:', { username, password });

      // Redirect to the home page after the delay
      window.location.href = '/home'; // Replace '/home' with the desired URL
    }, 2000); // 2 seconds delay for simulation
  };

  return (
    <div className="container">
      <h2 className="title">Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="inputWrapper">
          <label htmlFor="username" className="label">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
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
          />
        </div>
        {!isLoading ? (
          <button type="submit" className="button">Login</button>
        ) : (
          <div className="loading-animation"></div>
        )}
      </form>
      {!isLoading && (
        <div className="orSignup">
          <p>Or <Link to="/signup">sign up</Link></p>
        </div>
      )}
    </div>
  );
}

export default Login;
