import React from 'react';
import HeaderContainer from './header/header_container';

class App extends React.Component {

  componentWillReceiveProps() {
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        { this.props.children }
      </div>
    );
  }
}

export default App;
