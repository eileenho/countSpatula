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
  }

  updateInputVal(e) {
    this.setState({
        inputVal: e.target.value
    });
    this.props.searchTags(e.target.value)
      .then(tags => this.setState({tags: tags.tags}));
  }

  updateTagName() {
    if (this.state.inputVal) {
      this.setState({
        tagName: !this.state.tagName
      });
    }
  }

  renderResults(tags) {
    if (tags) {
      return (
        <ul>
          { tags.map((tag, i) => <li key={i}>{tag.name}</li>) }
        </ul>
      );
    }
  }

  render () {
    return (
      <div className="tags-search-form">
        <input onChange={this.updateInputVal}
               onClick={this.updateTagName}
               value={this.state.inputVal} />
           { this.renderResults(this.state.tags) }
     </div>

   );
  }

}

export default TagsSearch;
