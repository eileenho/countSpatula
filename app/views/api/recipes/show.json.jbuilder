# json.extract! @recipe, :id, :title, :one_liner, :ingredients, :directions, :image_url
#
# if @recipe.notes
#   @recipe.notes.each do |note|
#     json.set! note.id do
#       json.extract! note, :id, :note, :image_url, :cooked_date, :recipe_id
#     end
#   end
# end

json.recipe do
  json.id @recipe.id
  json.title @recipe.title
  json.one_liner @recipe.one_liner
  json.ingredients @recipe.ingredients
  json.directions @recipe.directions
  json.image_url @recipe.image_url
  json.notes @recipe.notes.each do |note|
    json.set! note.id do
      json.extract! note, :id, :note, :image_url, :cooked_date, :recipe_id
    end
  end
end
