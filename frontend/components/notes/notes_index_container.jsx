import { connect } from 'react-redux';
import NotesIndex from './notes_index';
import { requestNotes, deleteNote, updateNote } from '../../actions/note_actions';
import { values } from 'lodash';
import { notesArray } from '../../reducers/selectors';

const mapStateToProps = ( state, ownProps ) => {
  return {
    recipe: ownProps.recipe,
    notes: notesArray(state)
  };
};

const mapDispatchToProps = dispatch => ({
  requestNotes: (id) => dispatch(requestNotes(id)),
  deleteNote: id => dispatch(deleteNote(id)),
  updateNote: note => dispatch(deleteNote(note))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesIndex);
