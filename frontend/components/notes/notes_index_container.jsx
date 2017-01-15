import { connect } from 'react-redux';
import NotesIndex from './notes_index';
// import { requestAllNotes } from '../../actions/note_actions';
import { values } from 'lodash';

const mapStateToProps = ( state ) => ({
  notes: values(state.notes)
});

const mapDispatchToProps = dispatch => ({
  // requestAllNotes: (id) => dispatch(requestAllNotes(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesIndex);
