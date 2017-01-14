import React from 'react';
import RecipeIndexItem from './recipes_index_item';

class RecipeIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllRecipes();
  }

  render() {
    const recipes = this.props.recipes;
    if (recipes) {
      return (
        <ul>
          {recipes.map(recipe => <RecipeIndexItem key={recipe.id} recipe={recipe} />)}
        </ul>
      );
    } else {
      return <div></div>;
    }
  }
}

export default RecipeIndex;
