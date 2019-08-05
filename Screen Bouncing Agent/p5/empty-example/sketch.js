var v;
function setup() {
  
  // put setup code here
  createCanvas(200,200);
  v = new Vehicle(random(0,width),random(0,height));


}

function draw() {
  // put drawing code here
  background(0,0,0);
  stroke(255);
  noFill();
  rect(10,10,width-20,height-20);
  v.display();
  v.bounce();
  v.update();




}