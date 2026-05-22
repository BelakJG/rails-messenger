class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :friendships, dependent: :destroy
  has_many :friends, through: :friendships, source: :friend

  has_many :inverse_friendship, class_name: "Friendship", foreign_key: "friend_id"
  has_many :pending_friends, ->(user) {
    all_added_ids = user.friendships.select(:friend_id)
    where.not(id: all_added_ids)
  }, through: :inverse_friendship, source: :user
end
