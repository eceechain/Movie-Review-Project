import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the login logic here, such as sending the username and password to a server for authentication
    console.log('Submitted:', { username, password });

    // Display an alert message upon successful login
    window.alert("You've been logged in");

    // Reload the page
    window.location.reload();
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
        <button type="submit" className="button">Login</button>
      </form>
      <div className="orSignup">
        <p>Or <Link to="/signup">sign up</Link></p> {/* Use Link component instead of <a> */}
      </div>
    </div>
  );
}

export default Login;
