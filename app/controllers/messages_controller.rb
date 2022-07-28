class MessagesController < ApplicationController
  before_action :require_user

  def create
    message = current_user.messages.build(message_params)
    a = current_user.username
    if message.save
      # redirect_to root_path
      ActionCable.server.broadcast "chatroom_channel", {mod_message: message_render(message)}
      ActionCable.server.broadcast "notification_channel",{foo: a,fast: message.body}
    end
  end

  private
  def message_params
    params.require(:message).permit(:body)
  end

  def message_render(message)
    render(partial: 'message',locals: {message: message})
  end
end