class Api::RecipesController < ApplicationController

  before_filter :require_logged_in

  def create
    @recipe = Recipe.new(recipe_params)

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
    @recipes = current_user.recipes
  end

  def show
    @recipe = Recipe.find(params[:id])
    @notes = @recipe.notes
  end

  private

  def recipe_params
    params.require(:recipe).permit(:title, :one_liner, :directions, :ingredients, :image_url)
  end
end
