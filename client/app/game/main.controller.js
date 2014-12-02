'use strict';

angular.module('mvpApp')
  .controller('GameCtrl', function ($scope, Game, $timeout) {
    angular.extend($scope, Game);    

    $scope.game.runScript = function(string){
      console.log(string.split('\n'));
      var script = string.split('\n').reverse();

      var doSteps = function(steps){
        var statement = steps.pop();
        statement = statement.split(' ');

        if ( statement[0] !== 'grab' && statement[0] !== 'gift'){
          $scope.game.move(statement[0], Number(statement[1] || 1));

        } else {
          $scope.game[statement[0]]();
        }

        if(steps.length > 0){
          $timeout(function(){doSteps(steps)}, Number(statement[1])*500 || 500);
        }

      };

      doSteps(script);
    }

  });
