import React from 'react';
import { withRouter, hashHistory } from 'react-router';

class NotesIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeId: this.props.note.recipe_id
    };
    this.defaultImage = this.defaultImage.bind(this);
  }

  defaultImage() {
    if (this.props.note.image_url === "") {
      return <img src="http://res.cloudinary.com/di8mt9hbc/image/upload/v1484764129/baconeggs_ec1nxk.png" />;
    } else {
      return <img src={ this.props.note.image_url } />;
    }
  }

  deleteNote() {
    const deleteConfirm = confirm("Delete this note?");
    if (deleteConfirm === true) {
      this.props.deleteNote(this.props.note.id);
      hashHistory.replace(`profile/${this.props.params.id}`);
    }
  }

  render() {
    const { note } = this.props;

    return (
      <div className="notes-index-item">
        <div className="notes-index-image">
          { this.defaultImage() }
        </div>
        <div className="notes-index-note">
          <h1>Date: { note.cooked_date }</h1>
          <p>{ note.note }</p>
          <button className="delete-note-button" onClick={ this.deleteNote.bind(this) }>Delete</button>
        </div>
      </div>
    );
  }
}

export default withRouter(NotesIndexItem);
