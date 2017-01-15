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
