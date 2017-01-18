import React from 'react';
import NotesIndexItem from './notes_index_item';

class NotesIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.requestNotes(this.props.recipe.id).then( () => (
  //     this.setState({
  //       notes: this.props.notes
  //     })
  //   ));
  // }

  render() {
    console.log(this.props.notes);
    console.log(this.props.recipe);
    const { notes } = this.props.recipe;
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
