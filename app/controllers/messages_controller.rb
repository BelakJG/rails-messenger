class MessagesController < ApplicationController
  before_action :authenticate_user!

  def user_messages
    user = User.find(params[:user_id])
    messages = Message.between_users(current_user.id, user.id)

    render inertia: "messages/user_dms", props: {
      messages: messages,
      other_user: user
    }
  end
end
