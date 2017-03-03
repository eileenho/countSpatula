import React from 'react';
import { Link } from 'react-router';

const Welcome = ({store}) => {
  return (
    <div className="welcome-background">
      <div className="welcome">
        <h1>Welcome to Spatula</h1>
        <p>A personal, online recipe storage site</p>
        <div className="welcome-links">
          <Link to="/login" className='login'>LOGIN</Link>
          <br/>
          <Link to="/signup" className='signup'>SIGN UP</Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
