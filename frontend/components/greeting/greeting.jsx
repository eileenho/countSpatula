import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <div>
    <Link to="/login">Log In</Link>
    <Link to="/signup">Sign up!</Link>
  </div>
);

const personalGreeting = ({ currentUser, logout }) => (
  <div>
    <h1>Welcome, {currentUser.name}!</h1>
    <button onClick={ logout }>Logout</button>
  </div>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
