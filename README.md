#Spatula

[Spatula][spatula] is an online recipe storage site where users can save and keep track of their recipes.

[spatula]:
http://www.spatula.site

##Features

###Account creation, login, and guest/demo login
![login][login]

Authentication was implemented on the backend in Rails, keeping user passwords safe by utilizing the BCrypt gem.  A guest login is available for users to experience the site before signing up.

###User profile page featuring a user's recipe collection

![profile][profile]

Upon login, a user is directed to their profile page, which immediately renders their entire recipe collection.

### Search recipes by tags
A join table was created to link recipe's with tags.  Users can search for recipes through this tagging association.

###Recipe pages that display recipe details
![notes][notes]

Each recipe page shows details for each recipe.  Users are able to create and delete recipes, as well as add notes for each recipe.

### Notes creation for recipes
Notes keep track of the date a recipe is cooked and any relevant information a user may want to remember for the next time he or she may cook the recipe.

##Technology

Spatula was built using Ruby on Rails and React Redux.

##Future features

* Ability to add recipes from other websites via an upload link
* Interaction between users (ability to share recipes and view notes feed)
* Filter recipes through multiple tags

[notes]: ./docs/notes.png
[login]: ./docs/login.png
[profile]: ./docs/profile.png
