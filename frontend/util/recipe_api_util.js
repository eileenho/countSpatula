export const fetchAllRecipes = () => (
  $.ajax({
    method: 'GET',
    url: '/api/recipes'
  })
);

export const fetchRecipe = id => (
  $.ajax({
    method: 'GET',
    url: `/api/recipes/${id}`
  })
);

export const createRecipe = recipe => (
  $.ajax({
    method: 'POST',
    url: '/api/recipes',
    data: { recipe }
  })
);
