class Api::TagsController < ApplicationController
  def index
    @tags = Tag.all
  end

  def show
    @tag = Tag.find(params[:id])
  end

  def create
    @tag = Tag.find_or_create_by(name: params[:name])
    if @tag.save!
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def destroy
    @tag = Tag.find(params[:id])
    if @tag
      @tag.destroy
      render json: @tag
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  private

  def tag_params
    params.require(:tag).permit(:name, :recipe_id)
  end
end
