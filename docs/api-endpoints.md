# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Recipes

- `GET /api/recipes` or /api/users/:userId?
  - Recipes index
- `POST /api/Recipes`
- `GET /api/recipes/:id`
- `PATCH /api/recipes/:id`
- `DELETE /api/recipes/:id`

### Recipe

- `GET /api/users/:userId/recipes/:recipeId`
- `POST /api/users/:userId/recipes/:recipeId`
- `DELETE /api/users/:userId/recipes/:recipeId`
- `GET /api/users/:userId/recipes/:recipeId/notes`
  - index of all notes for a recipe
  - `POST /api/users/:userId/recipes/:recipeId/notes`
