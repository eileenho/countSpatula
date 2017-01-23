class Api::TagsController < ApplicationController

  before_filter :require_logged_in

  def index
    @tags = Tag.all
  end

  def show
    @tag = Tag.find(params[:id])
  end

  def create

    @tag = Tag.find_or_create_by(name: tag_params[:name])
    @tagging = Tagging.find_or_create_by(recipe_id: tag_params[:recipe_id], tag_id: @tag.id)
    render json: @tag
  end

  def destroy
    @tag = Tag.find(params[:id])
    if @tag
      @tag.destroy
      render json: {}
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def destroyTagging
    @tag = Tag.find(params[:id])
    @tagging = @tag.taggings.select{ |tagging| tagging.recipe_id == tag_params[:recipe_id].to_i }.first
    if @tagging
      @tagging.destroy
      render json: @tagging
    else
      render json: @tagging.errors.full_messages, status: 422
    end
  end

  def search
    if params[:query]
      @tags = Tag.all.where("LOWER(name) ~ LOWER(?)", params[:query]).limit(5)
      recipe_ids = []
      current_user.recipes.each { |recipe| recipe_ids << recipe.id }
      taggings_tag_id = []
      Tagging.all.each { |tagging| taggings_tag_id << tagging.tag_id if recipe_ids.include?(tagging.recipe_id) }
      @tags = @tags.select{ |tag| taggings_tag_id.include?(tag.id) }
    else
      @tags = Tag.none
    end
    render :search
  end

  def recipes
    @tag = Tag.find(params[:id])
    @recipes = @tag.recipes.select{ |recipe| recipe.user_id == current_user.id}
    render :recipes
  end

  private

  def tag_params
    params.require(:tag).permit(:name, :recipe_id)
  end
end
