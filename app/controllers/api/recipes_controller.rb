class Api::RecipesController < ApplicationController

  before_filter :require_logged_in

  def create
    @recipe = Recipe.new(recipe_params)

    if @recipe.save
      render :show
    else
      p @recipe.errors.full_messages
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
    if @recipes
      render :index
    else
      render(json: ["No recipes"], status: 422)
    end
  end

  def show
    @recipe = Recipe.find(params[:id])
  end

  private

  def recipe_params
    params.require(:recipe).permit(:title, :one_liner, :image_url, :user_id, ingredients: [], directions: [])
  end
  #
  # def ingredient_params
  #   params.require(:recipe).permit(ingredients: [])
  # end
  #
  # def direction_params
  #   params.require(:recipe).permit(directions: [])
  # end
end
