import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <div className="header">
    <nav className="nav_logo">
      <div></div>
      <Link to="/home"></Link>
    </nav>
    <nav className="nav_menu">
      <Link to="/login">Log In</Link>
      <Link to="/signup">Sign Up</Link>
    </nav>
  </div>
);

const personalGreeting = (currentUser, logout) => (
  <div className="header">
    <nav className="nav_logo">
      <div></div>
      <Link to="/home"></Link>
    </nav>
    <nav className="nav_menu">
      <h1>Welcome, {currentUser.username}!</h1>
      <button onClick={ logout }>Logout</button>
    </nav>
  </div>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
