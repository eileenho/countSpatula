class CreateNotes < ActiveRecord::Migration[5.0]
  def change
    create_table :notes do |t|
      t.text :note, null: false
      t.string :image_url
      t.integer :recipe_id
      t.date :cooked_date

      t.timestamps
    end
  end
end
