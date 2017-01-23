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
      showNoteForm: false,
    };

    this.onClickRecipe = this.onClickRecipe.bind(this);
    this.onClickNote = this.onClickNote.bind(this);
    this.buttonText = this.buttonText.bind(this);
    this.noteButtonText = this.noteButtonText.bind(this);
    this.toggleVisibleRecipe = this.toggleVisibleRecipe.bind(this);
    this.toggleVisibleNote = this.toggleVisibleNote.bind(this);
  }

  componentDidMount() {
    this.props.requestRecipe(this.props.recipeId);
    this.props.requestRecipeTags(this.props.recipeId);
  }

  onClickRecipe(e) {
    e.preventDefault();
    this.setState({ showEditRecipeForm: !this.state.showEditRecipeForm });
  }

  onClickNote(e) {
    e.preventDefault();
    this.setState({ showNoteForm: !this.state.showNoteForm });
  }

  toggleVisibleRecipe() {
    this.setState({ showEditRecipeForm: false });
  }

  toggleVisibleNote() {
    this.setState({ showNoteForm: false });
  }

  buttonText() {
    if (this.state.showEditRecipeForm) {
      return "Hide Form";
    } else {
      return "Edit Recipe";
    }
  }

  noteButtonText() {
    if (this.state.showNoteForm) {
      return "Hide Form";
    } else {
      return "Add Note";
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
              <button className="recipe-options-button" onClick={ this.onClickRecipe }>{ this.buttonText() }</button>
              <button className="recipe-options-button" onClick={ this.deleteRecipe.bind(this) }>Delete Recipe</button>
              <div className="recipe-edit-form">
                { this.state.showEditRecipeForm && <EditRecipeFormContainer { ...this.props } toggleVisible={this.toggleVisibleRecipe} /> }
              </div>
            </div>
          </div>
          <div className="large-recipe-container">
            <RecipeDetail recipe={recipe} />
            <div className="notes">
              <button className="show-note-form-button" onClick={ this.onClickNote }>{ this.noteButtonText() }</button>
              { this.state.showNoteForm && <NoteFormContainer recipeId={this.props.recipe.id} toggleVisibleNote={this.toggleVisibleNote} /> }
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
