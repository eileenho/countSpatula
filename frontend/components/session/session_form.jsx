import React from 'react';
import { Link, withRouter } from 'react-router';
import SessionFormContainer from './session_form_container';
import merge from 'lodash/merge';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.redirectIfLoggedIn();
  }

  componentDidUpate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.replace("/profile");
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user}).then(() => this.props.router.push('/profile'));
	}


  navLink() {
    if (this.props.formType === "login") {
      return <Link to="/signup">Sign Up</Link>;
    } else {
      return <Link to="/login">Login</Link>;
    }
  }

  buttonValue() {
    if (this.props.formType === "login") {
      return "Log In";
    } else {
      return "Sign Up";
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{ error }</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="welcome-background">
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <h1>Welcome to Spatula!</h1><br />
            {this.renderErrors()}
            <div className="login-form">
              <label> Username:</label>
              <br />
                <input type="text"
                       value={this.state.username}
                       onChange={this.update("username")}
                       className="login-input" />
              <br />
              <label> Password:</label>
              <br />
                <input type="password"
                       value={this.state.password}
                       onChange={this.update("password")}
                       className="login-input" />
              <br />
              <button className="form-button" type="submit">{ this.buttonValue() }</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
