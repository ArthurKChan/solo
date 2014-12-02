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

        if (statement[0] === 'repeat') {
          var subRoutine = [];
          var fullRoutine = [];
          
          while( steps[steps.length-1] && steps[steps.length-1][0] === '-'){
            subRoutine.push( steps.pop().split('').splice(1).join('') );
          }
          subRoutine = subRoutine.reverse();
          
          for(var i=0; i<statement[1]; i++){
            fullRoutine = fullRoutine.concat(subRoutine);
          }

          steps = steps.concat(fullRoutine);
          console.log('New script:', steps);
          
          statement = steps.pop().split(' ');
        }

        if ( statement[0] !== 'grab' && statement[0] !== 'gift'){
          $scope.game.move(statement[0], Number(statement[1] || 1));

        } else {
          $scope.game[statement[0]]();
        }

        if(steps.length > 0){
          $timeout(function(){doSteps(steps)}, Number(statement[1])*250 || 250);
        }

      };

      doSteps(script);
    }

  });
