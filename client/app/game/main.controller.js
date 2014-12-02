'use strict';

angular.module('mvpApp')
  .controller('GameCtrl', function ($scope, Game, $timeout) {
    angular.extend($scope, Game);    
    $scope.game.initRobot(1,5);
    $scope.logText = function(text){
      console.log(text);
    }
    $scope.game.runScript = function(string){
      console.log(string.split('\n'));
      var script = string.split('\n').reverse();

      var doSteps = function(steps){
        $scope.game.move(steps.pop());
        if(steps.length > 0){
          $timeout(function(){doSteps(steps)}, 500);
        }
      };

      doSteps(script);
    }
  });
