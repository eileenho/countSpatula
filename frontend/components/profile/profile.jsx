import React from 'react';
import RecipesIndexContainer from '../recipes/recipes_index_container';

class Profile extends React.Component {

  render () {
    return (
      <div className="profile">
        <span>Add New Recipe</span>
        <RecipesIndexContainer />
      </div>
    );
  }
}

export default Profile;
