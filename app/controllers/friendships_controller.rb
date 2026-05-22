class FriendshipsController < ApplicationController
  before_action :authenticate_user!

  def create
    current_user.friendships.create!(friendship_params)

    redirect_back fallback_location: root_path
  end

  def destroy
    friends = Friendship.where(user_id: current_user.id, friend_id: params[:id])
      .or(Friendship.where(user_id: params[:id], friend_id: current_user.id))

    friends.destroy_all
    redirect_back fallback_location: root_path
  end

  private
  def friendship_params
    params.require(:friendship).permit(:friend_id)
  end
end
