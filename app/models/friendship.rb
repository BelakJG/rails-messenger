class Friendship < ApplicationRecord
  validates :user, presence: true
  validates :friend, presence: true
end
