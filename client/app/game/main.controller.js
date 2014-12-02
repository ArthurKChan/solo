'use strict';

angular.module('mvpApp')
  .controller('GameCtrl', function ($scope, Game) {
    angular.extend($scope, Game);    
    $scope.game.initRobot(1,5);
  });
