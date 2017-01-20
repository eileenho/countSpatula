import React from 'react';
import { withRouter } from 'react-router';

class RecipeIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    // this.showTags = this.showTags.bind(this);
    // this.showDescription = this.showDescription.bind(this);
  }

  handleClick() {
    const recipeId = this.props.recipe.id;
    this.props.router.push(`/profile/${recipeId}`);
  }

  // showDescription() {
  //   const { one_liner } = this.props.recipe;
  //   if (one_liner) {
  //     return one_liner;
  //   } else {
  //     return <div></div>;
  //   }
  // }

  // showTags() {
  //   debugger
  //   const { tags } = this.props.recipe;
  //   if (tags) {
  //     return (
  //       <ul className="recipe-index-item-tags">
  //         {tags.map((tag, i) =>
  //           <li key={i}>{tag.name}</li>)}
  //       </ul>
  //     );
  //   }
  // }

  render() {
    const { title, image_url } = this.props.recipe;

    return (
      <div className="recipe-index-item" onClick = {this.handleClick}>
        <div className="recipe-index-image">
          <img src={ image_url } />
        </div>
        <div className="recipe-index-title">{ title }</div>
        <div className="tags"></div>
      </div>
    );
  }
}
//
// { this.showTags() }
export default withRouter(RecipeIndexItem);
