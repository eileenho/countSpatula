import React from 'react';

class Recipe extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
      </div>
    );
  }
}

export default Recipe;
