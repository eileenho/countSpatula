# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

guest = User.create(username: "guest", password: "password")

recipe1 = Recipe.new(title: "Double double", one_liner: "get into my belly", user_id: 1, image_url: "http://images.onset.freedom.com/ocregister/nz1tfc-doubledoublephotojpeg.jpg")
