import React from 'react';
import RecipesIndexContainer from '../recipes/recipes_index_container';
import RecipeFormContainer from '../recipes/recipe_form_container';
import TagsSearchContainer from '../tags/tags_search_container';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      showRecipeForm: false
    };
    this.onClick = this.onClick.bind(this);
    this.buttonText = this.buttonText.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    this.setState({ showRecipeForm: !this.state.showRecipeForm });
  }

  buttonText() {
    if (this.state.showRecipeForm) {
      return "Hide Form";
    } else {
      return "Add Recipe";
    }
  }

  render () {
    return (
      <div className="profile">
        <div className="tags-search-container">
          <TagsSearchContainer /><br />
        </div>
        <div className="profile-heading">
          <button onClick={ this.onClick } className="show-recipe-form-button">{ this.buttonText() }</button>
        </div>
        { this.state.showRecipeForm && <RecipeFormContainer /> }
        <RecipesIndexContainer /><br />
      </div>
    );
  }
}

export default Profile;
