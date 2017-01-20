import React from 'react';
import RecipeIndexItem from './recipes_index_item';

class RecipeIndex extends React.Component {

  constructor(props) {
    super(props);
    debugger
  }

  componentDidMount() {
    this.props.requestAllRecipes();
  }

  render() {
    const recipes = this.props.recipes;
    if (recipes) {
      return (
        <div className="recipe-index-container">
          {recipes.map(recipe => <RecipeIndexItem key={recipe.id} recipe={recipe} />)}
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default RecipeIndex;
