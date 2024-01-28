import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const SignUp = () => {
  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Create New Account</h2>
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
          <label>
            Confirm Password:
            <input type="password" />
          </label>
          <br />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
