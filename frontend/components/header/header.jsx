import React from 'react';
import { withRouter, Link } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.loginGuest = this.loginGuest.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  loginGuest(e) {
    e.preventDefault();
    const guest = { user: {username: "guest", password: "password"}};
    this.props.login(guest).then(() => this.props.router.push('/profile'));
  }

  handleLogout() {
    this.props.logout().then(() => this.props.router.push('/'));
  }

  // let user = `${this.props.currentUser.username}'s Recipes`;
  // return user;
  // 
  // userLink() {
  //   return "My Recipes";
  // }

  render() {
    let navMenu;
    if (this.props.currentUser) {
      navMenu = (
        <ul>
          <li><Link to="/profile">My Recipes</Link></li>
          <li><button onClick={ this.handleLogout }>Logout</button></li>
        </ul>
      );
    } else {
      navMenu = (
        <ul>
          <li><Link to="/login">Log In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><button onClick={ this.loginGuest }>Demo</button></li>
        </ul>
      );
    }

    return (
      <div className="header">
        <div className="nav-logo">
          <Link to="/">spatula</Link>
        </div>
        <div className="nav-menu">
          { navMenu }
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
