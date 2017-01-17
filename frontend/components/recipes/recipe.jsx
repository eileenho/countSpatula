import React from 'react';
import { withRouter, hashHistory } from 'react-router';

import EditRecipeFormContainer from './edit_recipe_form_container';
import RecipeDetail from './recipe_detail';
import NoteFormContainer from '../notes/note_form_container';
import NotesIndexContainer from '../notes/notes_index_container';

class Recipe extends React.Component {

  componentDidMount() {
    this.props.requestRecipe(this.props.recipeId);
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
          <div className="recipe-edit-form">
            <EditRecipeFormContainer { ...this.props }/>
            <button onClick={ this.deleteRecipe.bind(this) }>Delete Recipe</button>
          </div>
          <div className="recipe-container">
            <div className="recipe">
              <RecipeDetail recipe={recipe} />
            </div>
            <div className="notes">
              <NoteFormContainer recipeId={this.props.recipe.id}/>
              <NotesIndexContainer />
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
