import { merge } from 'lodash';

import { RECEIVE_ALL_RECIPES, RECEIVE_RECIPE, REMOVE_RECIPE } from '../actions/recipe_actions';

const RecipesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_RECIPES:
      return merge({}, action.recipes);
    case RECEIVE_RECIPE:
      return {[action.recipe.id]: action.recipe};
    case REMOVE_RECIPE:
      delete newState[action.recipe.id];
      return newState;
    default:
      return state;
  }
};

export default RecipesReducer;
