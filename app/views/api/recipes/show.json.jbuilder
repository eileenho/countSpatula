json.recipe do
  json.extract! @recipe, :id, :title, :directions, :image_url
end

json.notes do
  @notes.each do |note|
    json.set! note.id, note
  end
end

# json.extract! @recipe, :id, :title, :directions, :image_url
#
# @notes.each do |note|
#   json.set! note.id do
#     json.extract! note, :id, :note, :image_url, :recipe_id
#   end
# end
