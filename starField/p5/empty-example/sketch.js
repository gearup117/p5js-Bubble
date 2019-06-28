var star = [];
var noOfStars = 800;
function setup() {
  // put setup code here
  createCanvas(400,400);
  for(i = 0;i<noOfStars;i++){
  star[i] = new Star();
  }
  
}

function draw() {
  // put drawing code here
  background(0);
  translate(width/2,height/2);
  for(i = 0;i<noOfStars;i++){
    star[i].move();
    star[i].show();
    
    star[i].update();
    }
  
  
}