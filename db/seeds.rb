# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

guest = User.create(username: "guest", password: "password")
eileen = User.create(username: "eileen", password: "password")

recipe1 = Recipe.create(title: "Chocolate Cupcakes", image_url: "http://res.cloudinary.com/di8mt9hbc/image/upload/v1484368939/pexels-photo-29600_nexugn.jpg", one_liner: "Grandma's secret recipe", user_id: 1)
recipe2 = Recipe.create(title: "Garlic Fries", image_url: "http://res.cloudinary.com/di8mt9hbc/image/upload/v1484368433/pexels-photo-99606_rg38ku.jpg", one_liner: "roasted garlic and potatoes", user_id: 1)
recipe3 = Recipe.create(title: "Spaghetti", image_url: "http://res.cloudinary.com/di8mt9hbc/image/upload/v1484368330/food-dinner-pasta-spaghetti-8500_gphtz9.jpg", one_liner: "spaghetti with a red meat sauce", user_id: 1)
recipe4 = Recipe.create(title: "Roasted Salmon", image_url: "http://res.cloudinary.com/di8mt9hbc/image/upload/v1484368292/salmon-dish-food-meal-46239_n9vwwb.jpg", one_liner: "crusted with lemon pepper", user_id: 1)
recipe5 = Recipe.create(title: "Pomegranate Chicken Salad", image_url: "http://res.cloudinary.com/di8mt9hbc/image/upload/v1484368259/food-salad-healthy-lunch_j2vfrm.jpg", one_liner: "a light, diet-friendly meal", user_id: 1)
