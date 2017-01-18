import React from 'react';
import { withRouter } from 'react-router';

class NotesIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.notes;
    this.defaultImage = this.defaultImage.bind(this);
  }

  defaultImage() {
    if (this.props.note.image_url === "") {
      return <img src="http://res.cloudinary.com/di8mt9hbc/image/upload/v1484764129/baconeggs_ec1nxk.png" />;
    } else {
      return <img src={ this.props.note.image_url } />;
    }
  }

  render() {
    const { note, cooked_date } = this.props.note;

    return (
      <div className="notes-index-item">
        <div className="notes-index-image">
          { this.defaultImage() }
        </div>
        <div className="notes-index-note">
          <h1>Date: { cooked_date }</h1>
          <p>Note: { note }</p>
        </div>
      </div>
    );
  }
}

export default withRouter(NotesIndexItem);
