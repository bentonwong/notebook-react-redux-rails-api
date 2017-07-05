class NotebooksController < ApplicationController
  before_action :set_notebook, only: [:show, :update, :destroy]

  def index
    @notebooks = Notebook.all
    render json: @notebooks.to_json, :layout => false
  end

  def create
    @notebook = Notebook.create(notebook_params)
    render json: @notebook.to_json, :layout => false
  end

  def show
    render json: @notebook.to_json, :layout => false
  end

  def update
    @notebook.update(notebook_params)
  end

  def destroy
    @notebook.destroy
  end

  private

    def notebook_params
      params.require(:notebook).permit(:title)
    end

    def set_notebook
      @notebook = Notebook.find_by(id: params[:id])
    end
end
