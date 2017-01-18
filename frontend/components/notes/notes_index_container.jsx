import { connect } from 'react-redux';
import NotesIndex from './notes_index';
import { requestNotes, deleteNote, updateNote } from '../../actions/note_actions';
import { values } from 'lodash';

const mapStateToProps = ( state, ownProps ) => ({
  recipe: ownProps.recipe,
  notes: ownProps.notes
});

const mapDispatchToProps = dispatch => ({
  requestNotes: (id) => dispatch(requestNotes(id)),
  deleteNote: id => dispatch(deleteNote(id)),
  updateNote: note => dispatch(deleteNote(note))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesIndex);
