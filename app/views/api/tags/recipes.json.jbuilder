json.array! @recipes do |recipe|
  json.extract! recipe, :id, :title, :one_liner, :ingredients, :directions, :image_url
end
