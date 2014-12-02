'use strict';

angular.module('mvpApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
    {
      'title':'Game',
      'link':'/game'
    },
    {
      'title' : 'How to Play',
      'link':'/instructions'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });