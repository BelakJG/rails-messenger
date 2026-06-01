class HomepageController < ApplicationController
  before_action :authenticate_user!

  def home
    render inertia: "homepage/homepage"
  end
end
