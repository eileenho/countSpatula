import React from 'react';
import { Link, withRouter } from 'react-router';
import WelcomeContainer from './welcome_container';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.loginGuest = this.loginGuest.bind(this);
  }

  loginGuest(e) {
    e.preventDefault();
    const guest = { user: {username: "guest", password: "password"}};
    this.props.login(guest).then(() => this.props.router.push('/profile'));
  }

  render() {
    return (
      <div className="welcome-background">
        <div className="welcome">
          <h1>Welcome to Spatula</h1>
          <p>A personal, online recipe storage site</p>
          <div className="welcome-links">
            <Link to="/login" className='login'>LOGIN</Link>
            <Link to="/signup" className='signup'>SIGN UP</Link>
            or Take a Tour as
            <button className="demo-form-button" onClick={ this.loginGuest }>Guest</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Welcome);
