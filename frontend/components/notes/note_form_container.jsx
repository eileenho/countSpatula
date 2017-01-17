import { connect } from 'react-redux';
import { createNote } from '../../actions/note_actions';
import NoteForm from './note_form';

const mapStateToProps = ( state, {params}) => ({

});

const mapDispatchToProps = dispatch => ({
  createNote: (note) => dispatch(createNote(note))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(NoteForm);
