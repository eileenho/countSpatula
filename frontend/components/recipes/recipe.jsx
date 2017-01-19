import React from 'react';
import { withRouter, hashHistory } from 'react-router';

import EditRecipeFormContainer from './edit_recipe_form_container';
import RecipeDetail from './recipe_detail';
import NoteFormContainer from '../notes/note_form_container';
import NotesIndexContainer from '../notes/notes_index_container';
import RecipeTagsContainer from '../tags/recipe_tags_container';

class Recipe extends React.Component {
  constructor() {
    super();
    this.state = {
      showEditRecipeForm: false,
    };

    this.onClick = this.onClick.bind(this);
    this.buttonText = this.buttonText.bind(this);
    this.toggleVisible = this.toggleVisible.bind(this);
  }

  componentDidMount() {
    this.props.requestRecipe(this.props.recipeId);
    this.props.requestRecipeTags(this.props.recipeId);
  }

  onClick(e) {
    e.preventDefault();
    this.setState({ showEditRecipeForm: !this.state.showEditRecipeForm });
  }

  toggleVisible() {
    this.setState({ showEditRecipeForm: false });
  }

  buttonText() {
    if (this.state.showEditRecipeForm) {
      return "Hide Form";
    } else {
      return "Edit Recipe";
    }
  }

  deleteRecipe() {
    this.props.deleteRecipe(this.props.recipeId);
    hashHistory.replace('/profile');
  }

  render() {
    const { recipe } = this.props;
    if (recipe) {
      return (
        <div className="show-recipe-container">
          <div className="recipe-tags-container">
            <RecipeTagsContainer recipeId={this.props.recipe.id} />
          </div>
          <div className="recipe-edit-form">
            <div className="recipe-options">
              <button onClick={ this.onClick } className="show-recipe-form-button">{ this.buttonText() }</button>
              <button onClick={ this.deleteRecipe.bind(this) }>Delete Recipe</button>
            </div>
            { this.state.showEditRecipeForm && <EditRecipeFormContainer { ...this.props } toggleVisible={this.toggleVisible} /> }
          </div>
          <div className="large-recipe-container">
            <div className="recipe">
              <RecipeDetail recipe={recipe} />
            </div>
            <div className="notes">
              <NoteFormContainer recipeId={this.props.recipe.id}/>
              <NotesIndexContainer recipe={this.props.recipe} />
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default withRouter(Recipe);
