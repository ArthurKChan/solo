'use strict';

angular.module('mvpApp')
  .controller('GameCtrl', function ($scope, Game) {
    angular.extend($scope, Game);    
  });
