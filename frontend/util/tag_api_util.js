export const fetchAllTags = () => (
  $.ajax({
    method: 'GET',
    url: '/api/tags'
  })
);

export const fetchRecipeTags = recipeId => (
  $.ajax({
    method: 'GET',
    url: `/api/recipes/${recipeId}/tags`
  })
);

export const fetchTag = id => (
  $.ajax({
    method: 'GET',
    url: `api/tags/${id}`
  })
);

export const createTag = tag => (
  $.ajax({
    method: 'POST',
    url: '/api/tags',
    data: { tag }
  })
);

export const deleteTag = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/tags/${id}`
  })
);

export const deleteTagging = (tag, recipeId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/tagging/${tag.id}`,
    data: { tag: {id: `tag.id`, recipe_id: recipeId}}
  })
);
