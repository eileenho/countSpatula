import React from 'react';
import { Link } from 'react-router';

const Welcome = ({store}) => {
  return (
    <div className="welcome-background">
      <div className="welcome">
        <p>Store all of your recipes in one place at Count Spatula</p>
      </div>
      <div className="welcome-links">
        <Link to="/login" className='login'>LOGIN</Link>
         or
        <Link to="/signup" className='signup'>SIGN UP</Link>
      </div>
    </div>
  );
};

export default Welcome;
