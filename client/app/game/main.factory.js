'use strict';

angular.module('mvpApp')
  .factory('Game', function ($timeout) {
    var robot = {x:0 ,y:0, cargo:[]};
    var grid = [];
    var length = 16;
    var robotImg = '../../assets/images/marvin2.png';
    var goalImg = '../../assets/images/robo.png';
    var itemImg = '../../assets/images/melon.png';

    // set up board
    // any even = wall
    // both odds = space
    for(var i=0; i<length; i++){
      grid[i] = []
      for(var j=0; j<length; j++){
        grid[i][j] = {};
      }
    }

    var setGoal = function(x,y){
      if (x && y) {
        grid[y][x]['image'] = goalImg;
        grid[y][x]['goal'] = 'Robo';
      } else {
        console.error('needs a goal location');
      }
    };

    var setItem = function(x,y){
      if (x && y) {
        grid[y][x]['image'] = itemImg;
        grid[y][x]['item'] = 'watermelon';
      } else {
        console.error('needs an item location');
      }
    }

    var setRobot = function(x,y){
      grid[ robot.y ][ robot.x ] = {};
      if (x && y) {
        robot.x = x;
        robot.y = y;
      }
      grid[ robot.y ][ robot.x ]['image'] = robotImg;
    };

    var grab = function(){
      if (grid[robot.y][robot.x]['item']) {
        var item = grid[robot.y][robot.x]['item'];
        robot.cargo.push(item);
        console.log('Got a(n)',item);
        delete grid[robot.y][robot.x]['item'];
      } else { 
        console.log('Nothing to grab!');
      }
    }

    var gift = function(){
      var loc = grid[robot.y][robot.x];
      if (loc['goal'] && robot.cargo.length === 5) {
        alert('Marvin befriended '+ loc['goal']);
      } else if (loc['goal'] && robot.cargo.length < 5) {
        alert('Not enough watermelon! '+loc['goal']+' rejected Marvin\'s offer of friendship!');
      } else {
        alert('Nobody is here...');
      }
    }

    var getGrid = function(){
      return grid;
    };


    // Robot controls ************************************************
    var moveUp = function(){
      var loc = grid[robot.y][robot.x];
      if (loc['item']){ loc['image'] = itemImg; }
      else { loc['image'] = ''; }
      
      if (robot.y > 0){ robot.y -= 1; console.log('moving up');}
      grid[ robot.y ][ robot.x ]['image'] = robotImg;
    }

    var moveDown = function(){
      var loc = grid[robot.y][robot.x];
      if (loc['item']){ loc['image'] = itemImg; }
      else { loc['image'] = ''; }

      if (robot.y < length-1){ robot.y += 1; console.log('moving down');}
      grid[ robot.y ][ robot.x ]['image'] = robotImg;
    }

    var moveLeft = function(){
      var loc = grid[robot.y][robot.x];
      if (loc['item']){ loc['image'] = itemImg; }
      else { loc['image'] = ''; }

      if (robot.x > 0){ robot.x -= 1; console.log('moving left');}
      grid[ robot.y ][ robot.x ]['image'] = robotImg;
    }

    var moveRight = function(){
      var loc = grid[robot.y][robot.x];
      if (loc['item']){ loc['image'] = itemImg; }
      else { loc['image'] = ''; }

      if (robot.x < length-1){ robot.x += 1; console.log('moving right');}
      grid[ robot.y ][ robot.x ]['image'] = robotImg;
    }

    var move = function(string, count){
      var action;
      if (string === 'up'){ action = moveUp;}
      if (string === 'down'){ action = moveDown;}
      if (string === 'left'){ action = moveLeft;}
      if (string === 'right'){ action = moveRight;}

      if (count === undefined){
        action();
      }

      else if (count) {
        action();
        $timeout(function(){move(string, count-1)}, 500);
      } else {
        return;
      }
    }
    //End of robot controls**************************************


    //init robot*********************
    setRobot(1,1);
    setGoal(1,14);

    setItem(5,2);
    setItem(9,3);
    setItem(13,4);
    setItem(11,7);
    setItem(9,10);

    return {
      game : {
        getGrid: getGrid,
        move: move,
        grab: grab,
        gift: gift
      }
    };
  });