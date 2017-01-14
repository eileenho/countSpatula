import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';

import SessionFormContainer from './session/session_form_container';
import Welcome from './welcome';
import ProfileContainer from './profile/profile_container';
import RecipeContainer from './recipes/recipe_container';

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
          <Route path="/profile" component= { ProfileContainer } />
          <Route path="/profile/:id" component= { RecipeContainer } />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
