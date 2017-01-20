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
    // this.updateTagName = this.updateTagName.bind(this);
    this.renderResults = this.renderResults.bind(this);
    // this.fetchRecipes = this.fetchRecipes.bind(this);
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
        .then(tags => this.renderResults(tags));
    }
  }

  // updateTagName(e) {
  //   if (this.state.inputVal) {
  //     this.setState({
  //       tagName: !this.state.tagName
  //     });
  //   this.props.requestRecipesByTag(e.target.value.id);
  //   }
  // }
  //
  // fetchRecipes(id) {
  //     this.props.requestRecipesByTag(id);
  // }

  renderResults(tags) {
    if (tags) {
      return tags.map((tag) => this.props.requestRecipesById(tag.id));
    }
  }

//  onClick={this.updateTagName}
  render () {
    return (
      <div className="tags-search-form">
        <input onChange={this.updateInputVal}
               value={this.state.inputVal}
               className="tags-search-form-input"/><br />
     </div>
   );
  }
}

export default TagsSearch;
