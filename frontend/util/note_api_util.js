export const createNote = note => (
  $.ajax({
    method: 'POST',
    url: 'api/notes',
    data: { note }
  })
);

export const fetchNote = id => (
  $.ajax({
    method: 'GET',
    url: `api/notes/${id}`
  })
);

export const fetchNotes = recipeId => (
  $.ajax({
    method: 'GET',
    url: '/api/notes',
    data: { recipeId }
  })
);

export const updateNote = note => (
  $.ajax({
    method: 'PATCH',
    url: `api/notes/${note.id}`,
    data: { note }
  })
);

export const deleteNote = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/notes/${id}`
  })
);
