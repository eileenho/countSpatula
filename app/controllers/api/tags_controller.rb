class Api::TagsController < ApplicationController
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
    else
      @tags = Tag.none
    end
    render :search
  end

  def recipes
    @tag = Tag.find(params[:id])
    @recipes = @tag.recipes
    render :recipes
  end

  private

  def tag_params
    params.require(:tag).permit(:name, :recipe_id)
  end
end
