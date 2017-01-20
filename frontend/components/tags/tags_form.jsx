import React from 'react';

class TagsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      recipe_id: this.props.recipeId
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTag(this.state).then( () => (
      this.setState({
        name: ""
      })
    ));
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit } className="tag-form">
        <input type="text"
               value={ this.state.name }
               onChange={ this.update("name") }
               required />
             <input type="submit" value="Add Tag"></input>
      </form>
    );
  }
}

export default TagsForm;
