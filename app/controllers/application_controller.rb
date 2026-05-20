class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  def after_sign_in_path_for(resource)
    # Redirect to a specific path, like a dashboard
    root_path
  end
  def after_sign_out_path_for(resource_or_scope)
    # Return the path you want the user to be redirected to
    new_user_session_path # Redirects to the login page
  end

  inertia_share do
    {
      auth: {
        user: current_user ?
        {
          id: current_user.id,
          email: current_user.email
        } : nil
      }
    }
  end
end
