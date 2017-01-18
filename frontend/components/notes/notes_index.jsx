import React from 'react';
import NotesIndexItem from './notes_index_item';

class NotesIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestNotes(this.props.recipe.id);
  }

  render() {
    const { notes } = this.props;
    
    if (notes) {
      return (
        <div className="notes-index-container">
          {notes.map(note => <NotesIndexItem key={note.id} note={note} />)}
        </div>
      );
    } else {
      return <div>No Notes!</div>;
    }
  }
}

export default NotesIndex;
