import React from 'react';
import { withRouter } from 'react-router';

class NotesIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { note, image_url, date_cooked } = this.props.note;

    return (
      <div className="notes-index-item">
        <div className="notes-index-image">
        </div>
        <div className="notes-index-note">
          <p>{ note }</p>
          <p>{ date_cooked }</p>
        </div>
      </div>
    );
  }
}

export default withRouter(NotesIndexItem);
