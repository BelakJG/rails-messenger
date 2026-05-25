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

  def create
    message = current_user.sent_messages.build(message_params)

    if message.save
      redirect_back fallback_location: "/messages/#{params[:receiver_id]}"
    else
      redirect_back fallback_location: "/messages/#{params[:receiver_id]}",
                    inertia: {
                      errors: message.errors
                    }
    end
  end

  private
  def message_params
    params.require(:messages).permit(:receiver_id, :body)
  end
end
