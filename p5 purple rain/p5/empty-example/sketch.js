var rain = [];
var noOfDrops = 200;
function setup() {
  // put setup code here
   createCanvas(600,600);
  for(var i = 0;i<noOfDrops;i++){
   rain[i] = new Rain(random(width),random(-100,-200));
  }
}

function draw() {
  // put drawing code here
  background(200,220,200);
  for(var i = 0;i<noOfDrops;i++){
    rain[i].show();
    rain[i].move();
   }
   
  
}