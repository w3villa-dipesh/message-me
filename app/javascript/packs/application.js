// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from '@rails/ujs'
import Turbolinks from 'turbolinks'
import * as ActiveStorage from '@rails/activestorage'
import 'channels'

Rails.start()
Turbolinks.start()
ActiveStorage.start()

Notification.requestPermission().then(function (result){

})

import '@doabit/semantic-ui-sass'

// if you wan't to use custom variables, you should import custom stylesheet
// import 'stylesheets/semantic-ui.scss'
import '@doabit/semantic-ui-sass'
// import '@doabit/semantic-ui-sass/src/scss/semantic-ui.scss';



$( document ).on('turbolinks:load', function() {
  console.log("It works on each visit!");
  submitMessage();
  scroller();
});

function scroller() {
  if ($('#messages').length > 0) {
    $('#messages').scrollTop($('#messages')[0].scrollHeight);
  }
}

function submitMessage() {
  $('#message_body').on('keydown', function(e) {
    if (e.keyCode == 13) {
      $('button').click();
      e.target.value = "";
    };
  });
};

$(document).on('turbolinks:load', function(){
    $('.ui.dropdown').dropdown();
    $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });
});
