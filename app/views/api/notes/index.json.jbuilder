json.array! @notes do |note|
  json.extract! note, :id, :note, :image_url, :cooked_date, :recipe_id
end
