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

  componentDidUpate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
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
		this.props.processForm({user}).then(() => this.props.router.push('/home'));
	}


  navLink() {
    if (this.props.formType === "login") {
      return <Link to="/signup">Sign Up</Link>;
    } else {
      return <Link to="/login">Login</Link>;
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
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h1>Welcome to Count Spatula!</h1>
          <br/>
          <h2>Please {this.props.formType} or {this.navLink()}</h2>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label> Username:
            <br />
              <input type="text"
                     value={this.state.username}
                     onChange={this.update("username")}
                     className="login-input" />
            </label>
            <br/>
            <label> Password:
            <br/>
              <input type="password"
                     value={this.state.password}
                     onChange={this.update("password")}
                     className="login-input" />
            </label>
            <br/>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
