//Grid work
var grid, rows, cols;
var x, y;
var w, h;
var start, end;
//Grid work
var openSet = [];
var closedSet = [];
//The Node thats be processed
var current;
//Final rote from end to start Note it stores the path in reverse order
var path;
//checks if there is actual path or not
var foundPath = false;
//Fucntion to remove element from the array as there is no inbuilt function present in javaScript
function removeFromArray(arr, elt) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == elt) {
      arr.splice(i, 1);
    }
  }
}

function setup() {
  // put setup code here
  createCanvas(200, 200);
  //Grid work
  rows = 20;
  cols = 20;
  x = 0;
  y = 0;
  w = width / rows;
  h = height / cols;
  grid = new Array();

  for (var i = 0; i < rows; i++) {
    grid[i] = new Array();
  }
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      grid[i][j] = new Spot(i, j);
    }
  }
  start = grid[0][0];
  end = grid[rows - 1][cols - 1];
  //Start node and end node cannot be wall
  start.wall = false;
  end.wall = false;
  //As there is nothing we start from start node
  start.g = 0;
  start.f = start.g + dist(start.x, start.y, end.x, end.y);
  openSet.push(start);
  current = start;
  //Add the neighbor of each Node
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      grid[i][j].addNeighbour(grid);
    }
  }
}

function draw() {
  // put drawing code here
  if (openSet.length != 0) {
    var winner = 0;
    for (var i = 0; i < current.length; i++) {
      if (current[i].f < current[winner]) {
        winner = i;
        
      }
    }
    current = openSet[winner];
    if (current == end) {
      foundPath = true;
      console.log("!Done");
      noLoop();
    }
    removeFromArray(openSet,current);
    closedSet.push(current);
    var neighbour = current.neighbour;
    for(var i = 0;i<neighbour.length;i++){
      var n = neighbour[i];
      if(!closedSet.includes(n) && !n.wall){
        var tempG = current.g + 1;
        if(openSet.includes(n)){
        if(tempG < n.g){
          n.g = tempG;
        }
      }else{
        n.g = tempG;
        openSet.push(n);
      }
      //n.h = dist(n.x,n.y,end.x,end.y);
      n.h = abs(n.x - end.x) + abs(n.y - end.y);
      n.f = n.g + n.f;
      n.prevoius = current;
      }
    }
  } else {
    ////
  }

  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      grid[i][j].show(255, 255, 255);
    }
  }
  for (var i = 0; i < closedSet.length; i++) {
    closedSet[i].show(255, 0, 0);
  }
  for (var i = 0; i < openSet.length; i++) {
    openSet[i].show(0, 255, 0);
  }
  
  path = [];
  var temp = current;
      path.push(temp);
      while(temp.prevoius){
        path.push(temp.prevoius);
        temp = temp.prevoius;
      }
  for(var i = 0; i<path.length;i++){
    path[i].show(0,0,255);
  }
  end.show(100,200,0);
  if(!foundPath){
    console.log("No Path");
  }
}