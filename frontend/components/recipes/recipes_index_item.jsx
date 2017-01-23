import React from 'react';
import { withRouter } from 'react-router';

class RecipeIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.defaultImage = this.defaultImage.bind(this);
    // this.showTags = this.showTags.bind(this);
    // this.showDescription = this.showDescription.bind(this);
  }

  handleClick() {
    const recipeId = this.props.recipe.id;
    this.props.router.push(`/profile/${recipeId}`);
  }

  defaultImage() {
    if (this.props.recipe.image_url === "") {
      return <img src="http://res.cloudinary.com/di8mt9hbc/image/upload/v1485063949/spatula_fwpqgh.png" />;
    } else {
      return <img src={this.props.recipe.image_url} />;
    }
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
          { this.defaultImage() }
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
