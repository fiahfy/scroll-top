'use strict';

/* Controllers */

var controllers = angular.module('controllers', []);

controllers.controller('BackgroundMainCtrl', ['$scope', 'ScrollService', function($scope, ScrollService){
  ScrollService.attachBrowserActionListener();
}]);
