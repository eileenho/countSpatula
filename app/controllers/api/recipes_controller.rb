class Api::RecipesController < ApplicationController

  def create
    @recipe = Recipe.new(recipe)

    if @recipe.save
      render :show
    else
      render json: @recipe.errors.full_messages, status: 422
    end
  end

  def destroy
    @recipe = Recipe.find(params[:id])
    @recipe.destroy
    render :show
  end

  def index
    @recipes = Recipe.all
  end

  def show
    @recipe = Recipe.find(params[:id])
  end

  private

  def recipe_params
    params.require(:recipe).permit(:title, :description, :image_url)
  end
end
