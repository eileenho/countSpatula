import * as RecipeApiUtil from '../util/recipe_api_util';

export const RECEIVE_ALL_RECIPES = "RECEIVE_ALL_RECIPES";
export const RECEIVE_RECIPE = "RECEIVE_RECIPE";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const RECEIVE_RECIPE_ERRORS = "RECEIVE_RECIPE_ERRORS";

export const requestAllRecipes = () => dispatch => (
  RecipeApiUtil.fetchAllRecipes().then(recipes => dispatch(receiveAllRecipes(recipes)))
);

export const requestRecipe = id => dispatch => (
  RecipeApiUtil.fetchRecipe(id).then(recipe => dispatch(receiveRecipe(recipe)))
);

export const createRecipe = recipe => dispatch => (
  RecipeApiUtil.createRecipe(recipe).then(newRecipe => dispatch(receiveRecipe(newRecipe)))
  .fail(err => dispatch(receiveRecipeErrors(err.responseJSON)))
);

export const receiveAllRecipes = recipes => ({
  type: RECEIVE_ALL_RECIPES,
  recipes
});

export const receiveRecipe = recipe => ({
  type: RECEIVE_RECIPE,
  recipe
});

export const receiveRecipeErrors = errors => ({
  type: RECEIVE_RECIPE_ERRORS,
  errors
});
