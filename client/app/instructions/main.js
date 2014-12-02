'use strict';

angular.module('mvpApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/instructions', {
        templateUrl: 'app/instructions/main.html',
      });
  });