class FriendshipsController < ApplicationController
  before_action :authenticate_user!

  def create
    current_user.friendships.create!(friendship_params)

    redirect_back fallback_location: root_path
  end

  private
  def friendship_params
    params.require(:friendship).permit(:friend_id)
  end
end
