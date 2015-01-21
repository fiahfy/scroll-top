'use strict';

/* Services */

var services = angular.module('services', []);

services.service('ScrollService', function(){
  var me = this;
  this.attachBrowserActionListener = function(){
    chrome.browserAction.onClicked.addListener(function(tab){
      me.scrollTopWithTab(tab);
    });
  };
  this.scrollTopWithTab = function(tab){
    chrome.tabs.sendRequest(tab.id, {
      'id': 'scrollTop'
    }, function(response){
      //
    });
  };
});
