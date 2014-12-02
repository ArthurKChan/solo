'use strict';

angular.module('mvpApp')
  .factory('Game', function () {
    var grid = [];
    for(var i=0; i<16; i++){
      grid[i] = [];
    }
    for(var i=0; i<16; i++){
      for(var j=0; j<16; j++){
        grid[i][j] = '0';
      }
    }

    grid[1][2] = '<img src="assets/images/robo.png" alt="robo" height="20px">';
    grid[1][3] = '<svg height="20"><circle fill="red"/></svg>';
    return {
      grid: grid
    };
  });