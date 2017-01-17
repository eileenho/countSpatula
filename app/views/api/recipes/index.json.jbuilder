@recipes.each do |recipe|
  json.set! recipe.id do
    json.extract! recipe, :id, :title, :image_url, :user_id, :ingredients, :directions, :one_liner
  end
end
