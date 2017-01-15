import { merge } from 'lodash';

import { RECEIVE_ALL_NOTES, RECEIVE_NOTE } from '../actions/note_actions';

const NotesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_NOTES:
      return merge({}, state, action.notes);
    case RECEIVE_NOTE:
      return merge({}, state, {[action.note.id]: action.note});
    default:
      return state;
  }
};

export default NotesReducer;
