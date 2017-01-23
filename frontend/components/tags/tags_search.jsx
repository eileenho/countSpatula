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
    this.renderResults = this.renderResults.bind(this);
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
    return e => {
      e.preventDefault();
      this.props.requestRecipesByTag(id);
    };
  }

  renderResults(tags) {
    if (tags) {
      return (
        <ul className="search-results-list">
          { tags.map((tag, i) => <li key={i}><button className="search-result-tag" onClick={this.fetchRecipes(tag.id)}>{tag.name}</button></li>) }
        </ul>
      );
    }
  }

  render () {
    return (
      <div className="tags-search-form">
        <input onChange={this.updateInputVal}
               onClick={this.updateTagName}
               value={this.state.inputVal}
               placeholder="Search recipes by tags..."
                className="tags-search-input" />
           { this.renderResults(this.state.tags) }
     </div>

   );
  }

}

export default TagsSearch;
