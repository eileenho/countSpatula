class CreateRecipes < ActiveRecord::Migration[5.0]
  def change
    create_table :recipes do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.string :image_url

      t.timestamps
    end
  end
end
