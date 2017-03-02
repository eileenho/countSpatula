import React from 'react';
import { withRouter, Link } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout().then(() => this.props.router.push('/'));
  }

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
        </ul>
      );
    }

    let logo;
    if (this.props.currentUser) {
      logo = (<Link to="/profile">spatula</Link>);
    } else {
      logo = (<Link to="/">spatula</Link>);
    }

    return (
      <div className="header">
        <div className="nav-logo">
          { logo }
        </div>
        <div className="nav-menu">
          { navMenu }
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
