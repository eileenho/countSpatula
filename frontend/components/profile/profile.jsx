import React from 'react';
import RecipesIndexContainer from '../recipes/recipes_index_container';

class Profile extends React.Component {

  render () {
    return (
      <div className="profile">Profile Goes Here
        <RecipesIndexContainer />
      </div>
    );
  }
}

export default Profile;
