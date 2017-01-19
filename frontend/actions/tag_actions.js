import * as TagApiUtil from '../util/tag_api_util';

export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const RECEIVE_TAG = "RECEIVE_TAG";
export const REMOVE_TAG = "REMOVE_TAG";
export const REMOVE_TAGGING = "REMOVE_TAGGING";

export const requestAllTags = () => dispatch => (
  TagApiUtil.fetchAllTags().then(tags => dispatch(receiveTags(tags)))
);

export const requestRecipeTags = recipeId => dispatch => (
  TagApiUtil.fetchRecipeTags(recipeId).then(tags => dispatch(receiveTags(tags)))
);

export const requestTag = id => dispatch => (
  TagApiUtil.fetchTag(id).then(tag => dispatch(receiveTag(tag)))
);

export const createTag = tag => dispatch => (
  TagApiUtil.createTag(tag).then(newTag => dispatch(receiveTag(newTag)))
);

export const deleteTag = id => dispatch => (
  TagApiUtil.deleteTag(id).then(tag => dispatch(removeTag(tag)))
);

export const deleteTagging = (tag, recipeId) => dispatch => (
  TagApiUtil.deleteTagging(tag, recipeId).then(deletedTagging => dispatch(removeTagging(deletedTagging)))
);

export const searchTags = query => dispatch => (
  TagApiUtil.searchTags(query).then(tags => dispatch(receiveTags(tags)))
);

export const receiveTags = tags => ({
  type: RECEIVE_TAGS,
  tags
});

export const receiveTag = tag => ({
  type: RECEIVE_TAG,
  tag
});

export const removeTag = tag => ({
  type: REMOVE_TAG,
  tag
});

export const removeTagging = deletedTagging => ({
  type: REMOVE_TAGGING,
  deletedTagging
});
