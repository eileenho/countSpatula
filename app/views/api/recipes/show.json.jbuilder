# json.extract! @recipe, :id, :title, :one_liner, :ingredients, :directions, :image_url
#
# if @recipe.notes
#   @recipe.notes.each do |note|
#     json.set! note.id do
#       json.extract! note, :id, :note, :image_url, :cooked_date, :recipe_id
#     end
#   end
# end


json.id @recipe.id
json.title @recipe.title
json.one_liner @recipe.one_liner
json.ingredients @recipe.ingredients
json.directions @recipe.directions
json.image_url @recipe.image_url
json.notes @recipe.notes.each do |note|
  json.extract! note, :id, :note, :image_url, :cooked_date, :recipe_id
end

json.tags do
  @recipe.tags.each do |tag|
    json.set! tag.id do
      json.extract! tag, :id, :name
    end
  end
end
#  or?
# json.array! @recipe.tags do |tag|
#   json.extract! tag, :id, :name
# end
