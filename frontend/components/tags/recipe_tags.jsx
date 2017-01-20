import React from 'react';
import { hashHistory } from 'react-router';
import RecipeTagsContainer from './recipe_tags_container';
import TagsFormContainer from './tags_form_container';

class RecipeTags extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.showTags = this.showTags.bind(this);
  }

  componentDidMount() {
    this.props.requestRecipeTags(this.props.recipeId);
  }

  handleDelete(id) {
    this.props.deleteTag(id).then(()=>(this.props.requestRecipeTags(this.props.recipeId)));

  }

  showTags() {
      if (this.props.tags) {
        return this.props.tags.map((tag, id) => (
          <li className="tag-name" key={id}>
            { tag.name }
            <button className="delete-tag-button"
              onClick={() => this.handleDelete(tag.id)}>X</button>
          </li>
        ));
      } else {
        return <div></div>;
      }
  }

  render() {
    const { tags } = this.props;
    return (
      <div className="tags-list-container">
        <ul className="tags-list">
          { this.showTags() }
        </ul>
        <TagsFormContainer recipeId={this.props.recipeId}/>
      </div>
    );
  }
}



export default RecipeTags;
