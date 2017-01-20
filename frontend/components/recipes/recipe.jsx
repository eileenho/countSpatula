import React from 'react';
import { withRouter, hashHistory } from 'react-router';

import EditRecipeFormContainer from './edit_recipe_form_container';
import RecipeDetail from './recipe_detail';
import NoteFormContainer from '../notes/note_form_container';
import NotesIndexContainer from '../notes/notes_index_container';

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
   const deleteConfirm = confirm("Delete this recipe?");
    if (deleteConfirm === true) {
      this.props.deleteRecipe(this.props.recipeId);
      hashHistory.replace('/profile');
    }
  }

  render() {
    const { recipe } = this.props;
    if (recipe) {
      return (
        <div className="show-recipe-container">
          <div className="recipe-nav-bar">
            <div className="recipe-options">
              <button className="recipe-options-button" onClick={ this.onClick }>{ this.buttonText() }</button>
              <button className="recipe-options-button" onClick={ this.deleteRecipe.bind(this) }>Delete Recipe</button>
              <div className="recipe-edit-form">
                { this.state.showEditRecipeForm && <EditRecipeFormContainer { ...this.props } toggleVisible={this.toggleVisible} /> }
              </div>
            </div>
          </div>
          <div className="large-recipe-container">
            <RecipeDetail recipe={recipe} />
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
