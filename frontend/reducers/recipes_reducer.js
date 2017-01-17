import { merge } from 'lodash';

import { RECEIVE_ALL_RECIPES, RECEIVE_RECIPE } from '../actions/recipe_actions';

const RecipesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_RECIPES:
      return merge({}, action.recipes);
    case RECEIVE_RECIPE:
      return merge({}, state, {[action.recipe.id]: action.recipe});
    default:
      return state;
  }
};

export default RecipesReducer;
