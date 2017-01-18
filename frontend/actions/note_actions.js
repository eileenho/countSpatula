import * as NoteApiUtil from '../util/note_api_util';

export const RECEIVE_ALL_NOTES = "RECEIVE_ALL_NOTES";
export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const requestNotes = id => dispatch => (
  NoteApiUtil.fetchNotes(id).then(notes => {
    debugger;
    return dispatch(receiveAllNotes(notes)) }
  )
);

export const requestNote = id => dispatch => (
  NoteApiUtil.fetchNote(id).then(note => dispatch(receiveNote(note)))
);

export const createNote = note => dispatch => (
  NoteApiUtil.createNote(note).then(newNote => dispatch(receiveNote(newNote)),
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const updateNote = note => dispatch => (
  NoteApiUtil.updateNote(note).then(newNote => dispatch(receiveNote(newNote)))
);

export const deleteNote = id => dispatch => (
  NoteApiUtil.deleteNote(id).then(note => dispatch(removeNote(note)))
);

export const receiveAllNotes = notes => ({
  type: RECEIVE_ALL_NOTES,
  notes
});

export const receiveNote = note => ({
  type: RECEIVE_NOTE,
  note
});

export const removeNote = note => ({
  type: REMOVE_NOTE,
  note
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
