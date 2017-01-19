# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

guest = User.create(username: "guest", password: "password")
eileen = User.create(username: "eileen", password: "password")

recipe1 = Recipe.create(title: "Chocolate Cupcakes",
  image_url: "http://res.cloudinary.com/di8mt9hbc/image/upload/v1484368939/pexels-photo-29600_nexugn.jpg",
  one_liner: "Grandma's secret recipe",
  ingredients: ["4 tbsp. unsalted butter", "1/4 cup vegetable oil", "1/2 cup water", "1 cup all-purpose flour", "1 cup granulated sugar", "1/4 cup plus 2 tbsp unsweetened cocoa powder", "3/4 tsp baking soda", "1/8 tsp salt", "1 large egg", "1/4 cup buttermilk", "1 tsp pure vanilla extract"],
  directions: ["Preheat the oven to 350 degrees.  Line a 12-cup muffin tin wth paper or foil liners.",
               "In a medium saucepan, melt the butter with the vegetable oil and water over low heat.",
               "In a large bowl, sift the flour with the sugar, cocoa powder, baking soda, and salt.  Add the melted butter and beat with a handheld mixer at low speed until smooth.",
               "Add the egg and beat until incorporated.  Then add the buttermilk and vanilla.",
               "Pour batter into the muffin tins, filling them about three-fourths full.",
               "Bake the cupcakes in the center of the oven for about 25 minutes."],
  user_id: 1)
recipe2 = Recipe.create(title: "Garlic Fries", image_url: "http://res.cloudinary.com/di8mt9hbc/image/upload/v1484368433/pexels-photo-99606_rg38ku.jpg", one_liner: "roasted garlic and potatoes", user_id: 1)
recipe3 = Recipe.create(title: "Spaghetti", image_url: "http://res.cloudinary.com/di8mt9hbc/image/upload/v1484368330/food-dinner-pasta-spaghetti-8500_gphtz9.jpg", one_liner: "spaghetti with a red meat sauce", user_id: 1)
recipe4 = Recipe.create(title: "Roasted Salmon", image_url: "http://res.cloudinary.com/di8mt9hbc/image/upload/v1484368292/salmon-dish-food-meal-46239_n9vwwb.jpg", one_liner: "crusted with lemon pepper", user_id: 1)
recipe5 = Recipe.create(title: "Pomegranate Chicken Salad", image_url: "http://res.cloudinary.com/di8mt9hbc/image/upload/v1484368259/food-salad-healthy-lunch_j2vfrm.jpg", one_liner: "a light, diet-friendly meal", user_id: 1)

tag1 = Tag.create(name: "Healthy")
tag2 = Tag.create(name: "Seafood")

tagging1 = Tagging.create(recipe_id: 1, tag_id: 1)
tagging2 = Tagging.create(recipe_id: 2, tag_id: 1)
tagging3 = Tagging.create(recipe_id: 3, tag_id: 2)
tagging4 = Tagging.create(recipe_id: 1, tag_id: 2)
