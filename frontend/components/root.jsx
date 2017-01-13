import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';

import SessionFormContainer from './session/session_form_container';
import Welcome from './welcome';
import Profile from './profile/profile';

const Root = ({store}) => {

 const _redirectIfLoggedIn = (nextState, replace) => {
   const currentUser = store.getState().session.currentUser;
   if (currentUser) {
     replace('/');
   }
 };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Welcome }/>
          <Route path="/login" component={ SessionFormContainer }
                               onEnter={_redirectIfLoggedIn}/>
          <Route path="/signup" component={ SessionFormContainer }
                                onEnter={_redirectIfLoggedIn}/>
          <Route path="/profile" component= { Profile } />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
