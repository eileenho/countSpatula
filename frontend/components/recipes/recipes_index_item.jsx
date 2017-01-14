import React from 'react';
import { withRouter } from 'react-router';

class RecipeIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const recipeId = this.props.recipe.id;
    this.props.router.push(`/profile/${recipeId}`);
  }

  render() {
    const { title, image_url } = this.props.recipe;

    return (
      <div className="recipe-index-item" onClick = {this.handleClick}>
        <div className="recipe-index-image">
          <img src={ image_url } />
        </div>
        <div className="recipe-index-title">
          <p>{ title }</p>
        </div>
      </div>
    );
  }
}

export default withRouter(RecipeIndexItem);
