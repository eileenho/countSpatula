import React from 'react';
import HeaderContainer from './header/header_container';

// const App = ({children}) => (
//   <div>
//     <HeaderContainer />
//     { children }
//   </div>
// );

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
