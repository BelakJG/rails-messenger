class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :friendships, dependent: :destroy
  has_many :friends, through: :friendships, source: :friend

  has_many :received_messages, class_name: "Message", foreign_key: "receiver_id", dependent: :destroy
  has_many :sent_messages, class_name: "Message", foreign_key: "sender_id", dependent: :destroy

  def self.pending_friends(user)
    incoming = Friendship.where(friend_id: user.id).select(:user_id)
    outgoing = Friendship.where(user_id: user.id).select(:friend_id)

    User.where(id: incoming).where.not(id: outgoing)
  end
end
