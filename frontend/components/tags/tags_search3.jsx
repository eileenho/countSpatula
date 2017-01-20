import React from 'react';

class TagsSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
      tagName: false,
      tags: []
    };

    this.updateInputVal = this.updateInputVal.bind(this);
    this.updateTagName = this.updateTagName.bind(this);
    this.renderRecipes = this.renderRecipes.bind(this);
    this.renderTags = this.renderTags.bind(this);
    this.fetchRecipes = this.fetchRecipes.bind(this);
  }

  updateInputVal(e) {
    this.setState({
      inputVal: e.target.value
    });
    if (e.target.value === "") {
      this.props.requestAllRecipes();
      this.setState({
        tags: []
      });
    } else {
      debugger
      this.props.searchTags(e.target.value)
        .then(tags => this.setState({tags: tags.tags}));
    }
  }

  updateTagName() {
    if (this.state.inputVal) {
      this.setState({
        tagName: !this.state.tagName
      });
    }
  }

  fetchRecipes(id) {
    this.props.requestRecipesByTag(id);
  }

  // renderTags(tags) {
  //   if (tags) {
  //     return (
  //       <ul>
  //         { tags.map((tag, i) => <li key={i}><button onClick={this.fetchRecipes(tag.id)}>{tag.name}</button></li>) }
  //       </ul>
  //     );
  //   }
  // }

  renderRecipes(tags) {
    if (tags) {
      tags.map((tag, i) => this.fetchRecipes(tag.id));
    }
  }
  // { this.renderTags(this.state.tags) }

  render () {
    return (
      <div className="tags-search-form">
        <div className="tags-list">
        </div>
        <input onChange={this.updateInputVal}
               onClick={this.updateTagName}
               value={this.state.inputVal} />
             { this.renderRecipes(this.state.tags) }
      </div>
   );
  }

}

export default TagsSearch;
