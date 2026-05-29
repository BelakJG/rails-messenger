class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :friendships, dependent: :destroy
  has_many :friends, through: :friendships, source: :friend

  has_many :received_messages, class_name: "Message", foreign_key: "receiver_id", dependent: :destroy
  has_many :sent_messages, class_name: "Message", foreign_key: "sender_id", dependent: :destroy

  scope :incoming_friend_requests, ->(user_id) {
    incoming = Friendship.where(friend_id: user_id).select(:user_id)
    outgoing = Friendship.where(user_id: user_id).select(:friend_id)

    where(id: incoming).where.not(id: outgoing)
  }

  scope :pending_outgoing_friend_requests, ->(user_id) {
    outgoing = Friendship.where(user_id: user_id).select(:friend_id)
    incoming = Friendship.where(friend_id: user_id).select(:user_id)

    where(id: outgoing).where.not(id: incoming)
  }

  scope :accepted_friends, ->(user_id) {
    outgoing = Friendship.where(user_id: user_id).select(:friend_id)
    incoming = Friendship.where(friend_id: user_id).select(:user_id)

    where(id: outgoing).where(id: incoming)
  }

  scope :users_no_requests, ->(user_id) {
    outgoing = Friendship.where(user_id: user_id).select(:friend_id)
    incoming = Friendship.where(friend_id: user_id).select(:user_id)

    where.not(id: user_id).where.not(id: outgoing).where.not(id: incoming)
  }
end
