# frozen_string_literal: true

class InertiaExampleController < InertiaController
  before_action :authenticate_user!

  def index
    render inertia: {
      rails_version: Rails.version,
      ruby_version: RUBY_DESCRIPTION,
      rack_version: Rack.release,
      inertia_rails_version: InertiaRails::VERSION
    }
  end

  def users
    render inertia: "inertia_example/users", props: {
      friends: User.accepted_friends(current_user.id),
      incoming_friend_requests: User.incoming_friend_requests(current_user.id),
      outgoing_friend_requests: User.pending_outgoing_friend_requests(current_user.id),
      users_no_requests: User.users_no_requests(current_user.id)
    }
  end
end
