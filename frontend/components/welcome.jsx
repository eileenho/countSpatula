import React from 'react';
import { Link } from 'react-router';

const Welcome = ({store}) => {
  return (
    <div className="welcome-background">
      <div className="welcome">
        <p>Store all of your recipes in one place at Spatula</p>
      </div>
    </div>
  );
};

export default Welcome;

// <div className="welcome-links">
//   <Link to="/login" className='login'>LOGIN</Link>
//   <br/>
//   <Link to="/signup" className='signup'>SIGN UP</Link>
// </div>
