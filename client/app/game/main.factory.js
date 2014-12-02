'use strict';

angular.module('mvpApp')
  .factory('Game', function () {
    var robot = {x:0 ,y:0};
    var grid = [];
    var length = 16;

    // set up board
    // any even = wall
    // both odds = space
    for(var i=0; i<length; i++){
      grid[i] = []
      for(var j=0; j<length; j++){
        grid[i][j] = null;
      }
    }

    var getGrid = function(){
      return grid;
    };

    var initRobot = function(x,y){
      if(x && y){
        robot.x = x;
        robot.y = y;
      }
      grid[ robot.y ][ robot.x ] = 'X';
    };

    var moveUp = function(){
      grid[ robot.y ][ robot.x ] = null;
      if (robot.y > 0){ robot.y -= 1; console.log('moving up');}
      grid[ robot.y ][ robot.x ] = 'X';
    }

    var moveDown = function(){
      grid[ robot.y ][ robot.x ] = null;
      if (robot.y < length-1){ robot.y += 1; console.log('moving down');}
      grid[ robot.y ][ robot.x ] = 'X';
    }

    var moveLeft = function(){
      grid[ robot.y ][ robot.x ] = null;
      if (robot.x > 0){ robot.x -= 1; console.log('moving left');}
      grid[ robot.y ][ robot.x ] = 'X';
    }

    var moveRight = function(){
      grid[ robot.y ][ robot.x ] = null;
      if (robot.x < length-1){ robot.x += 1; console.log('moving right');}
      grid[ robot.y ][ robot.x ] = 'X';
    }

    var move = function(string){
      if (string === 'up'){ moveUp();}
      if (string === 'down'){ moveDown();}
      if (string === 'left'){ moveLeft();}
      if (string === 'right'){ moveRight();} 
    }

    return {
      game : {
        getGrid: getGrid,
        initRobot: initRobot,
        move: move
      }
    };
  });