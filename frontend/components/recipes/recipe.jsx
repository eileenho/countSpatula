import React from 'react';
import NoteFormContainer from '../notes/note_form_container';
import NotesIndexContainer from '../notes/notes_index_container';

class Recipe extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestRecipe(this.props.params.id);
  }
  // 
  // componentWillUpdate() {
  //   this.props.requestRecipe(this.props.params.id);
  // }

  render() {
    if (this.props.recipe) {
      const { image_url, title} = this.props.recipe;

      return (
        <div className="recipe-container">
          <div className="recipe-header">
            <img className="recipe-image" src={ image_url} />
            <h1 className="recipe-title">{ title }</h1>
          </div>
          <div className="recipe-ingredients">
            <h2>Ingredients</h2>
          </div>
          <div className="recipe-directions">
            <h2>Directions</h2>
          </div>
        <NoteFormContainer recipeId={this.props.recipe.id}/>
        <NotesIndexContainer />
        </div>
      );
    } else {
      return <div>Nothing</div>;
    }
  }
}

export default Recipe;
