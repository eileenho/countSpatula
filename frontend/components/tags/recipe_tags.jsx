import React from 'react';
import RecipeTagsContainer from './recipe_tags_container';
import TagsFormContainer from './tags_form_container';

class RecipeTags extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.requestRecipeTags(this.props.recipeId);
  }

  handleDelete(id) {
    this.props.deleteTag(id);
  }

  render() {
    const { tags } = this.props;
    return (
      <div className="tags-list-container">
        <ul className="tags-list">
          if (tags) {
            tags.map((tag, id) => (
              <li key={id}>
                <div className="tag-name">{ tag.name }</div>
                <button className="delete-tag-button"
                  onClick={() => this.handleDelete(tag.id)}></button>
              </li>
            ))
          } else {
            <div></div>
          }
        </ul>
        <div className="tag-form-container">
          <TagsFormContainer recipeId={this.props.recipeId}/>
        </div>
      </div>
    );
  }
}



export default RecipeTags;
