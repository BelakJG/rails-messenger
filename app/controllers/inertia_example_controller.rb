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

  def friends
    render inertia: "inertia_example/friends", props: {
      users: User.where.not(id: current_user.id)
    }
  end
end
