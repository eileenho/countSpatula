class Api::NotesController < ApplicationController

  before_filter :require_logged_in

  def create
    @note = Note.new(note_params)

    if @note.save
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def show
    @note = Note.find(params[:id])
    render :show
  end

  def edit
    @note = Note.find(params[:id])
  end

  def update
    if @note.update(note_params)
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def destroy
    @note = Note.find(params[:id])
    @note.destroy
    render :show
  end

  private
  def note_params
    params.require(:note).permit(:note, :image_url, :cooked_date, :recipe_id)
  end
end
