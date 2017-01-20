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
recipe2 = Recipe.create(title: "Garlic Fries",
  image_url: "http://res.cloudinary.com/di8mt9hbc/image/upload/v1484368433/pexels-photo-99606_rg38ku.jpg",
  one_liner: "baked, not fried!",
  ingredients: ["2 1/4 lbs. russet potatoes, cut into strips", "3 tbsp. vegetable oil", "4 garlic cloves, minced", "2 tbsp. chopped fresh parsley", "Salt and pepper"],
  directions: ["Preheat oven to 450 degrees.", "Toss potatoes with 2.5 tbsp. vegetable oil and season with salt and pepper.",
               "Arrange potatoes on a greased baking sheet.", "Roast potatoes in oven for 30 minutes.",
               "Raise oven temperature to 500 degrees and roast until fries are golden and crispy (about 5 more minutes).",
               "Whisk garlic, 1/2 tbsp vegetable oil, and parsley together.", "Add to hot fries and toss to coat."],
  user_id: 1)
recipe3 = Recipe.create(title: "Spaghetti",
  image_url: "http://res.cloudinary.com/di8mt9hbc/image/upload/v1484368330/food-dinner-pasta-spaghetti-8500_gphtz9.jpg",
  one_liner: "spaghetti with a red meat sauce",
  ingredients: ["1 lb. sweet Italian sausage", "1 lb. spaghetti", "28oz. can crushed tomatoes", "1/2 onion, chopped", "2 garlic cloves, minced", "1/2 cup red wine", "salt and pepper"],
  directions: ["Brown crumbled sausage in pan and remove when done.", "Saute onions and garlic in same pan over medium heat until tender and slightly carmelized.",
               "Add red wine and cook until almost evaporated.",
               "Add crushed tomatoes and cooked sausage to pan. Simmer for 15 minutes.",
               "Meanwhile, cook spaghetti according to package directions and toss with sauce when done."],
  user_id: 1)
recipe4 = Recipe.create(title: "Roasted Salmon",
  image_url: "http://res.cloudinary.com/di8mt9hbc/image/upload/v1484368292/salmon-dish-food-meal-46239_n9vwwb.jpg",
  one_liner: "crusted with lemon pepper",
  ingredients: ["1/2 cup chopped shallots", "1/4 cup drained capers", "1 tbsp. chopped dill", "1 1/4 pound skinless salmon fillet",
                "1 tbsp. lemon pepper", "2 tbsp. butter", "lemon wedges"],
  directions: ["Preheat oven to 425 degrees.", "Line a baking sheet with foil and spray with vegetable oil spray.", "Place salmon on baking sheet.",
               "Rub with lemon pepper.", "Mix shallots, capers, and dill together, and spread over the salmon.", "Dot with butter.", "Fold over foil edges to enclose salmon and seal.",
               "Bake for about 28 minutes.", "Serve with lemon wedges."],
  user_id: 1)
recipe5 = Recipe.create(title: "Pomegranate Chicken Salad",
  image_url: "http://res.cloudinary.com/di8mt9hbc/image/upload/v1484368259/food-salad-healthy-lunch_j2vfrm.jpg",
  one_liner: "a light, diet-friendly meal",
  ingredients: ["1 lb. chicken breast", "4 cups baby spinach leaves", "1 cup pomegranate seeds", "1/2 tsp. lemon zest",
                "2 tbsp. fresh lemon juice", "1 tsp. sugar", "1/2 tsp. Dijon mustard", "1/4 tsp. salt",
                "4 tbsp. extra virgin olive oil", "Freshly ground blak pepper"],
  directions: ["Season chicken breast with salt and pepper.  Cook in pan and slice into strips.", "Whisk lemon zest, lemon juice
               sugar, Dijon mustard, salt, and olive oil together.", "Season dressing to taste with salt and pepper.", "Toss all ingredients
               together with dressing."],
  user_id: 1)
recipe6 = Recipe.create(title: "Shrimp and Broccoli Stir Fry",
  image_url: "http://res.cloudinary.com/di8mt9hbc/image/upload/v1484898609/food-prawn-asian_phhqyz.jpg",
  one_liner: "traditional Chinese food",
  ingredients: ["1.5 lb. medium shrimp", "1.5 lb. broccoli florets", "1 tsp. sesame seeds", "1 green onion, thinly sliced", "3 tbsp. soy sauce",
                "2 tbsp. oyster sauce", "1 tbsp. rice wine vinegar", "1 tbsp. brown sugar", "1 tbsp. grated ginger", "2 cloves garlic, minced",
                "1 tsp. sesame oil", "1 tsp. cornstarch"],
  directions: ["Whisk together soy sauce, oyster sauce, rice wine vinegar, brown sugar, ginger, garlic, sesame oil, and cornstarch in a small bowl.",
               "Heat 1 tbsp. of olive oil in a large skillet over medium heat.", "Add shrimp and cook until pink, about 2-3 minutes.", "Add broccoli
               and cook, stirring frequently, until tender, about 2-3 minutes.", "Stir in soy sauce until mixed and slightly thickened.", "Garnish with
               sesame seeds and spring onions and serve."],
  user_id: 1)
recipe7 = Recipe.create(title: "Chocolate Chip Cookies",
  image_url: "http://res.cloudinary.com/di8mt9hbc/image/upload/v1484899139/pexels-photo-230325_dca93e.jpg",
  one_liner: "classic and simple",
  ingredients: ["1 cup butter", "1 cup sugar", "1 cup brown sugar", "2 eggs", "2 tsp. vanilla extract", "3 cups all-purpose flour",
                "1 tsp. baking soda", "2 tsp. hot water", "1/2 tsp. salt", "2 cups semisweet chocolate chips"],
  directions: ["Preheat oven to 350 degrees F.", "Cream together butter and sugar.  Beat in eggs ang stir in vanilla", "Dissolve baking soda in hot water.",
               "Add to batter, as well as the salt.", "Stir in flour and chocolate chips.", "Drop by large spoonfuls on greased cookie sheet.", "Bake
               for about 10 minutes, or until edges are nicely browned."],
  user_id: 1)
recipe8 = Recipe.create(title: "Pad Thai",
  image_url: "http://res.cloudinary.com/di8mt9hbc/image/upload/v1484899678/thai-food-noodle-fried-noodles-meal-46247_oqce4c.jpg",
  one_liner: "better than takeout!",
  ingredients: ["1 (12 ounce) package rice noodles", "2 tablespoons butter", "1 pound boneless, skinless chicken breast halves, cut into bite-sized pieces",
                "1/4 cup vegetable oil", "4 eggs", "1 tbsp white wine vinegar", "2 tbsp fish sauce", "3 tbsp white sugar", "1 tsp crushed red pepper", "2 cups bean sprouts",
                "1/4 cup crushed peanuts", "3 green onions, chopped", "1 lemon, cut into wedges"],
  directions: ["Soak noodes in cold water for 30-50 minutes, or until soft.  Drain and set aside.", "Heat butter in wok.  Saute chicken until just cooked through.",
               "Add oil in wok over medium-high heat and fry the eggs.", "Stir in chicken, add noodles and the rest of the ingredients.", "Stir fry until noodles are tender
               and everything is thoroughly mixed."],
  user_id: 1)
recipe9 = Recipe.create(title: "Pancakes",
  image_url: "http://res.cloudinary.com/di8mt9hbc/image/upload/v1484899912/pexels-photo-91931_cqejzo.jpg",
  one_liner: "made with buttermilk",
  ingredients: ["2 cups all-purpose flour", "3 tbsp. sugar", "1.5 tsp. baking powder", "1.5 tsp. baking soda", "1.25 tsp. salt",
                "2.5 cups buttermilk", "2 eggs", "3 tbsp. unsalted butter, melted"],
  directions: ["Whisk dry ingredients together, and whisk wet ingredents together.", "Stir everything together until just incorporated",
               "Heat skillet with 1 tbsp oil.", "Ladle 1/3 cup of batter onto skillet per pancake.", "Flip pancakes after bubbles begin to rise to
               the surface and bottoms brown (about 2 to 4 minutes).", "Cook until the other sides are lightly browned.", "Serve with your favorite toppings."],
  user_id: 1)
recipe10 = Recipe.create(title: "Roast Chicken",
  image_url: "http://res.cloudinary.com/di8mt9hbc/image/upload/v1484900377/pexels-photo-52612_cx9y71.jpg",
  one_liner: "no extra ingredients needed!",
  ingredients: ["2-3 lb. chicken", "salt and pepper", "2 tsp. minced thyme", "unsalted butter", "Dijon mustard"],
  directions: ["Preheat oven to 450 degrees F", "Rinse and dry chicken and salt and pepper the cavity.", "Salt the rest of the chicken (about 1 tbsp).",
               "Place the chicken in a roasting pan and put in the oven.", "Roast until done, about 50-60 minutes.", "Baste the chicken with the juices and let rest for 15 minutes before cutting."],
  user_id: 1)

recipe11 = Recipe.create(title: "Barbecue Chicken Strips",
  image_url: "http://res.cloudinary.com/di8mt9hbc/image/upload/v1484900479/food-1631727_1280_zmhpcf.jpg",
  one_liner: "healthy alternative",
  ingredients: ["1 cup prepared barbecue sauce", "2 tbsp. Dijon mustard", "2 tbsp. honey", "1.5 pounds chicken tenders"],
  directions: ["Combine barbecue sauce, mustard, and honey in a large bowl.  Set aside half a cup.", "Add chicken tenders to remaining sauce and toss to coat.",
               "Grill chicken strips until cooked through, basting every few minutes with sauce."],
  user_id: 1)

recipe12 = Recipe.create(title: "Green Beans",
  image_url: "http://res.cloudinary.com/di8mt9hbc/image/upload/v1484900701/green-bean-1443290_1280_lfcsc5.jpg",
  one_liner: "stir fry",
  ingredients: ["2 lb. green beans", "3 cloves garlic, minced", "salt and pepper to taste", "sesame oil"],
  directions: ["Boil green beans in a pot of water until crisp tender.", "Drain and place green beans in a bowl of ice water to stop the cooking process.",
               "Heat oil in a large skillet.", "Saute garlic until fragrant.  Be careful not to burn it.", "Add green beans and toss until heated through.", "Season to taste with salt and pepper."],
  user_id: 1)

recipe13 = Recipe.create(title: "Roasted Potatoes",
  image_url: "http://res.cloudinary.com/di8mt9hbc/image/upload/v1484900875/potato-706470_1280_xtjrpn.jpg",
  one_liner: "my favorite side dish",
  ingredients: ["2 lb. russet potatoes, cut into 1 inch chunks", "2 tbsp. extra virgin olive oil", "1 tbsp. minced rosemary",
                "1 tsp. thyme", "salt and pepper to taste"],
  directions: ["Preheat oven to 425 degrees F", "Toss potatoes with olive oil and spices", "Place potatoes on a baking sheet",
               "Season with salt and pepper", "Place potatoes in oven and roast until edges are crispy (about 45 minutes)."],
  user_id: 1)

recipe14 = Recipe.create(title: "Apple Tarts",
  image_url: "http://res.cloudinary.com/di8mt9hbc/image/upload/v1484941944/apple-tart-1543199_1280_tds297.jpg",
  one_liner: "Ina Garten's recipe",
  ingredients: ["2 cups all-purpose flour", "1/2 tsp. kosher salt", "1 tbsp sugar", "1 1/2 sticks cold unsalted butter, diced", "1/2 cup ice water",
                "4 granny smith apples", "1/2 cup sugar", "1/2 stick cold unsalted butter, small dice", "1/2 cup apricot jelly", "2 tbsp Calvados, rum, or water"],
  directions: ["Mix flour, salt, and sugar together in a food processor.", "Add 1 1/2 sticks of butter and pulse 10 to 12 times, until the butter is in small bits", "Pour ice water
               into the processor and pulse just until the dough begins to come together.", "Knead dough into a ball and wrap in plastic.  Refridgerate for at least 1 hour.",
               "Preheat oven to 400 degrees F.", "Line a sheet pan with parchment paper.", "Roll dough slightly larger than 10 by 14 inches.", "Peel and slice apples into 1/4-inch slices and place in overlapping layers on the dough.",
               "Sprinkle with 1/2 cup of sugar and dot with 1/2 stick of butter.", "Bake for 45 minuts to 1 hour, until the pastry is browned.", "Mix apricot jelly with Calvados and brush over the apples after baking."],
  user_id: 1)

recipe15 = Recipe.create(title: "Fried Rice",
  image_url: "http://res.cloudinary.com/di8mt9hbc/image/upload/v1484941887/restaurant-1762493_1280_bhdtr3.jpg",
  one_liner: "vegetarian",
  ingredients: ["2 cups white rice", "4 cups water", "2/3 cup chopped baby carrots", "1/2 cup frozen green peas", "2 tbsp. vegetable oil",
                "2 eggs", "soy sauce to taste", "sesame oil"],
  directions: ["In a saucepan, combine rice and water.  Bring to a boil, reduce heat, cover, and simmer for 20 minutes.",
               "Heat wok over high heat and add oil.", "Stir in carrots and cook until tender", "Add peas and cooke about 30 seconds.",
               "Crack in eggs and scramble with the vegetables.", "Stir in cooked rice until well mixed.", "Stir in soy sauce and sesame oil"],
  user_id: 1)

tag1 = Tag.create(name: "dessert")
tag2 = Tag.create(name: "chocolate")
tag3 = Tag.create(name: "potato")
tag4 = Tag.create(name: "garlic")
tag5 = Tag.create(name: "Italian")
tag6 = Tag.create(name: "pasta")
tag7 = Tag.create(name: "seafood")
tag8 = Tag.create(name: "salmon")
tag9 = Tag.create(name: "salad")
tag10 = Tag.create(name: "chicken")
tag11 = Tag.create(name: "asian")
tag12 = Tag.create(name: "dinner")
tag13 = Tag.create(name: "cookie")
tag14 = Tag.create(name: "noodles")
tag15 = Tag.create(name: "breakfast")
tag16 = Tag.create(name: "vegetable")
tag17 = Tag.create(name: "rice")

tagging1 = Tagging.create(recipe_id: 1, tag_id: 1)
tagging2 = Tagging.create(recipe_id: 7, tag_id: 1)
tagging3 = Tagging.create(recipe_id: 14, tag_id: 1)
tagging4 = Tagging.create(recipe_id: 1, tag_id: 2)
tagging5 = Tagging.create(recipe_id: 7, tag_id: 2)
tagging6 = Tagging.create(recipe_id: 2, tag_id: 3)
tagging8 = Tagging.create(recipe_id: 13, tag_id: 3)
tagging9 = Tagging.create(recipe_id: 2, tag_id: 4)
tagging10 = Tagging.create(recipe_id: 3, tag_id: 5)
tagging11 = Tagging.create(recipe_id: 3, tag_id: 6)
tagging12 = Tagging.create(recipe_id: 8, tag_id: 6)
tagging13 = Tagging.create(recipe_id: 6, tag_id: 7)
tagging14 = Tagging.create(recipe_id: 4, tag_id: 7)
tagging15 = Tagging.create(recipe_id: 4, tag_id: 8)
tagging16 = Tagging.create(recipe_id: 5, tag_id: 9)
tagging17 = Tagging.create(recipe_id: 5, tag_id: 10)
tagging18 = Tagging.create(recipe_id: 10, tag_id: 10)
tagging19 = Tagging.create(recipe_id: 11, tag_id: 10)
tagging20 = Tagging.create(recipe_id: 6, tag_id: 11)
tagging21 = Tagging.create(recipe_id: 8, tag_id: 11)
tagging22 = Tagging.create(recipe_id: 12, tag_id: 11)
tagging23 = Tagging.create(recipe_id: 15, tag_id: 11)
tagging24 = Tagging.create(recipe_id: 3, tag_id: 12)
tagging25 = Tagging.create(recipe_id: 4, tag_id: 12)
tagging26 = Tagging.create(recipe_id: 6, tag_id: 12)
tagging27 = Tagging.create(recipe_id: 7, tag_id: 13)
tagging28 = Tagging.create(recipe_id: 8, tag_id: 14)
tagging29 = Tagging.create(recipe_id: 9, tag_id: 15)
tagging30 = Tagging.create(recipe_id: 12, tag_id: 16)
tagging31 = Tagging.create(recipe_id: 13, tag_id: 16)
tagging32 = Tagging.create(recipe_id: 15, tag_id: 17)

note1 = Note.create(note: "still tasted good without meat!", cooked_date: "05/10/2016", recipe_id: 3, image_url: "http://res.cloudinary.com/di8mt9hbc/image/upload/v1484899574/pexels-photo_lbwakt.jpg")
note2 = Note.create(note: "need to work on cooking more evenly", cooked_date: "03/03/2016", recipe_id: 9, image_url: "http://res.cloudinary.com/di8mt9hbc/image/upload/v1484900008/pexels-photo-84042_iucxjw.jpg")
note3 = Note.create(note: "this time came out great!  User lower heat!", cooked_date: "04/02/2016", recipe_id: 9, image_url: "http://res.cloudinary.com/di8mt9hbc/image/upload/v1484900178/pexels-photo-26676_kbe4xu.jpg")
note4 = Note.create(note: "before baking - a beautiful cut", cooked_date: "05/07/2016", recipe_id: 4, image_url: "http://res.cloudinary.com/di8mt9hbc/image/upload/v1484902331/abstract-1238248_1280_woelvx.jpg")
note5 = Note.create(note: "maybe bake longer?", cooked_date: "10/12/2016", recipe_id: 14,  image_url: "https://pixabay.com/get/e830b50c2af4013ed1584d05fb0938c9bd22ffd41db9154895f2c47ca1/apple-tart-1543200_1280.jpg")
note6 = Note.create(note: "added more vegetables", cooked_date: "07/10/2015", recipe_id: 6, image_url: "http://res.cloudinary.com/di8mt9hbc/image/upload/v1484902960/chinese-food-951889_1280_fismhi.jpg")
note7 = Note.create(note: "good with chocolate frosting, too!", cooked_date: "12/01/2017", recipe_id: 1, image_url: "http://res.cloudinary.com/di8mt9hbc/image/upload/v1484942008/cupcakes-1081963_1280_oznks8.jpg")
note8 = Note.create(note: "Baked for 15 min for mini-cupcakes.", cooked_date: "15/01/2017", recipe_id: 1, image_url: "http://res.cloudinary.com/di8mt9hbc/image/upload/v1484942154/chocolate-1938702_1280_vgwbio.jpg")
