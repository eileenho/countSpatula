import * as RecipeApiUtil from '../util/recipe_api_util';
import { receiveAllNotes } from './note_actions';

export const RECEIVE_ALL_RECIPES = "RECEIVE_ALL_RECIPES";
export const RECEIVE_RECIPE = "RECEIVE_RECIPE";
export const REMOVE_RECIPE = "REMOVE_RECIPE";
export const RECEIVE_RECIPE_ERRORS = "RECEIVE_RECIPE_ERRORS";

export const requestAllRecipes = () => dispatch => (
  RecipeApiUtil.fetchAllRecipes().then(recipes => dispatch(receiveAllRecipes(recipes)))
);

export const requestRecipe = id => dispatch => (
  RecipeApiUtil.fetchRecipe(id).then(res => {
    return dispatch(receiveRecipe(res));
  })
);

export const createRecipe = recipe => dispatch => (
  RecipeApiUtil.createRecipe(recipe).then(newRecipe => dispatch(receiveRecipe(newRecipe)))
  .fail(err => dispatch(receiveRecipeErrors(err.responseJSON)))
);

export const updateRecipe = recipe => dispatch => (
  RecipeApiUtil.updateRecipe(recipe)
    .then(newRecipe => dispatch(receiveRecipe(newRecipe)))
);

export const deleteRecipe = id => dispatch => (
  RecipeApiUtil.deleteRecipe(id).then(recipe => dispatch(removeRecipe(recipe)))
);

export const receiveAllRecipes = recipes => ({
  type: RECEIVE_ALL_RECIPES,
  recipes
});

export const receiveRecipe = recipe => ({
  type: RECEIVE_RECIPE,
  recipe
});

export const removeRecipe = recipe => ({
  type: REMOVE_RECIPE,
  recipe
});

export const receiveRecipeErrors = errors => ({
  type: RECEIVE_RECIPE_ERRORS,
  errors
});
