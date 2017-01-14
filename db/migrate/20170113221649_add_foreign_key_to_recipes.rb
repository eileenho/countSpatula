class AddForeignKeyToRecipes < ActiveRecord::Migration[5.0]
  def change
    remove_column :recipes, :description
    add_column :recipes, :ingredients, :text
    add_column :recipes, :directions, :text
    add_column :recipes, :one_liner, :string
    add_column :recipes, :user_id, :integer
  end
end
