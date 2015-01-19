'use strict';

$(function(){
  chrome.extension.onRequest.addListener(function(request, sender, sendResponse){
    if (request.id === 'scrollTop') {
      $('html, body').animate({'scrollTop': 0}, 'fast');
    }
  });
});
