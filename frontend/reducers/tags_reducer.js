import merge from 'lodash/merge';

import { RECEIVE_TAGS, RECEIVE_TAG, REMOVE_TAG } from '../actions/tag_actions';

const TagsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_TAGS:
      return action.tags;
    case RECEIVE_TAG:
      return merge(newState, {[action.tag.id]: action.tag});
    case REMOVE_TAG:
      delete newState[action.tag.id];
      return newState;
    default:
    return state;
  }
};

export default TagsReducer;
