import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.loginGuest = this.loginGuest.bind(this);
  }

  loginGuest(e) {
    e.preventDefault(e);
    const guest = { user: {username: "guest", password: "password"}};
    this.props.login(guest);
  }

  userLink() {
    let user = `${this.props.currentUser.username}'s Recipes`;
    return user;
  }

  render() {
    let navMenu;
    if (this.props.currentUser) {
      navMenu = (
        <ul className="nav-menu">
          <li><Link to="/profile">{ this.userLink() }</Link></li>
          <li><button onClick={ this.props.logout }>Logout</button></li>
        </ul>
      );
    } else {
      navMenu = (
        <ul className="nav-menu">
          <li><Link to="/login">Log In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><button onClick={ this.loginGuest }>Demo</button></li>
        </ul>
      );
    }

    return (
      <div className="header">
        <nav className="nav-logo">
          <Link to="/">spatula</Link>
        </nav>
        <nav>
          { navMenu }
        </nav>
      </div>
    );
  }
}

export default Header;
