import { merge } from 'lodash';

import { RECEIVE_ALL_NOTES, RECEIVE_NOTE, REMOVE_NOTE } from '../actions/note_actions';

const NotesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_NOTES:
      return merge({}, state, action.notes);
    case RECEIVE_NOTE:
      return merge(newState, {[action.note.id]: action.note});
    case REMOVE_NOTE:
      delete newState[action.note.id];
      return newState;
    default:
      return state;
  }
};

export default NotesReducer;
