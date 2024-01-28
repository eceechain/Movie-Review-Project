import React from 'react';
import { Link } from 'react-router-dom';
import '../Auth.css';

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Login</h2>
        <form>
          <label>
            Username:
            <input type="text" />
          </label>
          <br />
          <label>
            Password:
            <input type="password" />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
        
      </div>
    </div>
  );
};

export default Login;
