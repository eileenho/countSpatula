import React from 'react';
import RecipeDetail from './recipe_detail';
import NoteFormContainer from '../notes/note_form_container';
import NotesIndexContainer from '../notes/notes_index_container';

class Recipe extends React.Component {

  componentDidMount() {
    this.props.requestRecipe(this.props.recipeId);
  }

  render() {
    const { recipe } = this.props;

    if (recipe) {
      return (
        <div className="show-recipe-container">
          <div className="recipe">
            <RecipeDetail recipe={recipe} />
          </div>
          <div className="notes">
            <div className="col-1-3">
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

export default Recipe;
