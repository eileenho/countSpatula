class AddIngredientsDirectionsColumns < ActiveRecord::Migration[5.0]
  def change
    add_column :recipes, :ingredients, :string, array: true, default: []
    add_column :recipes, :directions, :string, array: true, default: []
  end
end
