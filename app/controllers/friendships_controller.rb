class FriendshipsController < ApplicationController
  before_action :authenticate_user!

  def create
    current_user.friendships.create!(friend_id: params[:friend_id])

    redirect_to root_path
  end

  private
  def friendship_params
    params.require(:friendship).permit(:friend_id)
  end
end
