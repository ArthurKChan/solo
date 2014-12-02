'use strict';

angular.module('mvpApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/game', {
        templateUrl: 'app/game/main.html',
        controller: 'GameCtrl'
      });
  });