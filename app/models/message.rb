class Message < ApplicationRecord
  validates :sender, presence: true
  validates :body, presence: true
  validates :receiver, presence: true

  belongs_to :sender, class_name: "User"
  belongs_to :receiver, class_name: "User"

  scope :to_user, ->(user_id) { where(receiver_id: user_id) }
  scope :from_user, ->(user_id) { where(sender_id: user_id) }
  scope :between_users, ->(user_1_id, user_2_id) { where(receiver_id: user_1_id, sender_id: user_2_id)
                                                    .or(where(receiver_id: user_2_id, sender_id: user_1_id))
                                                    .order(created_at: :desc) }
end
