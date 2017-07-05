class NotesController < ApplicationController
  before_action :set_note, only: [:show, :update, :destroy]

  def index
    @notes = Note.all
    render json: @notes.to_json, :layout => false
  end

  def create
    @note = Note.create(note_params)
    render json: @note.to_json, :layout => false
  end

  def show
    render json: @note.to_json, :layout => false
  end

  def update
    @note.update(note_params)
  end

  def destroy
    @note.destroy
  end

  private

    def note_params
      params.require(:note).permit(:title, :body)
    end

    def set_note
      @note = Note.find_by(id: params[:id])
    end

end
