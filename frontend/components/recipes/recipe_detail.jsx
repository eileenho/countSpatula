import React from 'react';

class RecipeDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { recipe } = this.props;
    return (
      <div className="recipe-container">
        <div className="recipe-header">
          <img className="recipe-image" src={ recipe.image_url} />
          <h1 className="recipe-title">{ recipe.title }</h1>
        </div>
        <div className="recipe-ingredients">
          <h2>Ingredients:</h2>
          <ul className="ingredients">
            { recipe.ingredients.map((ingredient, i) => <li key={i}>{ ingredient }</li>) }
          </ul>
        </div>
        <div className="recipe-directions">
          <h2>Directions:</h2>
          <ul className="directions">
            { recipe.directions.map((direction, i) => <li key={i}>{ direction }</li>) }
          </ul>
        </div>
      </div>);
  }
}

export default RecipeDetail;
