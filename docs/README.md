# Count Spatula

[Heroku link][heroku]

[heroku]: http://herokuapp.component-hierarchy

## Minimum Viable Product

Count Spatula is an online recipe storage site built using Ruby on Rails and React/Redux.

Features:
* account creation, login, and guest/demo login
* user profile page featuring recipe collection
* recipe show page
* recipe comments and images
* calendar feed of recently cooked recipes

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Recipe Model, API, and components (2 days)

**Objective:** Write CRUD methods for adding a recipe under a user

### Phase 3: Notes (2 days)

**Objective:** Notes belong to a Recipe that can be created, read, edited and destroyed through the API.

### Phase 4: Feed (1 days)

**Objective:** Notes are displayed as a feed based on date; implement on for multiple recipes if time allows.


### Bonus Features (TBD)
- [ ] Filter recipes by tags
- [ ] Full calendar view of previous and planned recipes
