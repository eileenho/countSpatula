import React from 'react';
import { withRouter } from 'react-router';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image_url: "",
      note: "",
      cooked_date: "",
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
    this.props.createNote(this.state);
  }

  render() {
    return (
      <div className="note-form-container">
        <form onSubmit={this.handleSubmit} className="note-form-box">
          <h1>Add note</h1>
          <div className="note-form">
            <label>Date cooked: <br />
              <input type="date"
                     value={this.state.cooked_date}
                     onChange={this.update("cooked_date")}
                     className="note-form-date" />
            </label><br />
            <label>Note: <br />
              <input type="text"
                     value={this.state.note}
                     onChange={this.update("note")}
                     className="note-form-note" />
            </label><br />
          <label>Image URL: <br />
              <input type="text"
                     value={this.state.image_url}
                     onChange={this.update("image_url")}
                     className="note-form-image-url" />
            </label><br />
          <input type='submit' value='Add Note'></input>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(NoteForm);
