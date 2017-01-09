## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - Navbar

**RecipeIndexContainer**
 - RecipeIndex

**RecipeIndex**
 - RecipeIndexItem

**RecipeFormContainer**
 - RecipeForm

**ShowRecipeContainer**
 - RecipeContainer
 - NotesContainer
 - FeedContainer

**RecipeContainer**
 - RecipeItem

**RecipeNotesFormContainer**
 - RecipeNotesForm

**RecipeNotesIndexContainer**
 - RecipeNotesIndex

**RecipeNotesIndex**
  - RecipeNoteItem

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/users/:userId" | "RecipeIndexContainer" |
| "/home/users/:userId/recipes/:recipeId" | "RecipeContainer" |
| "/home/users/:userId/recipes/:recipeId" | "RecipeNotesContainer" |
| "/home/users/:userId/recipes/:recipeId" | "RecipeNotesIndexContainer" |
| "/home/users/:userId/recipes/:recipeId/new-note" | "RecipeNotesFormContainer"|
| "/new-recipe" | "RecipeFormContainer" |
