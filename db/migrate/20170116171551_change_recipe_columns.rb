class ChangeRecipeColumns < ActiveRecord::Migration[5.0]
  def change
    remove_column :recipes, :ingredients, :string
    remove_column :recipes, :directions
  end
end
