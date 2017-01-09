{
  currentUser: {
    id: 1,
    username: "Count Spatula"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
  },
  recipes: {
    1: {
      title: "Birthday Cake",
      ingredients: ["flour", "sugar", "butter", "eggs"],
      directions: ["mix it", "bake it", "eat it"],
      user_id: 1,
      notes: {
        1: {
          id: 1,
          note: "Bake for 25 minutes, not 30",
          date_completed: "1-23-2015",
        }
      }
    }
  }
}
