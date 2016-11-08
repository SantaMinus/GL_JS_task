class IconsController < ApplicationController
  before_action :set_icon, only: [:show, :update, :destroy]

  # GET /icons
  def index
    @icons = Icon.all

    render json: @icons
  end

  # GET /icons/1
  def show
    render json: @icon
  end

  # POST /icons
  def create
    @icon = Icon.new(icon_params)

    if @icon.save
      render json: @icon, status: :created, location: @icon
    else
      render json: @icon.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /icons/1
  def update
    if @icon.update(icon_params)
      render json: @icon
    else
      render json: @icon.errors, status: :unprocessable_entity
    end
  end

  # DELETE /icons/1
  def destroy
    @icon.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_icon
      @icon = Icon.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def icon_params
      params.require(:icon).permit(:icon, :name, :cap1, :cap2, :num1, :num2)
    end
end
