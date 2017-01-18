if @notes
  @notes.each do |note|
    json.set! note.id do
      json.extract! note, :id, :note, :image_url, :cooked_date, :recipe_id
    end
  end
end
