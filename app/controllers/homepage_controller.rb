class HomepageController < ApplicationController
  def home
    render inertia: "homepage/homepage"
  end
end
