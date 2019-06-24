var x,y,len;
function setup() {
  // put setup code here
  createCanvas(600,600);
  background(0);
  x = 0;
  y = 0;
  len = 10;
}

function draw() {
  // put drawing code here
  if(y != height){
  stroke(255);
  if(random(1)<0.5){
  line(x,y,x+len,y+len);
  x += len;
  }
  else{
  line(x,y+len,x+len,y);
  x+= len;
  }
  if(x >= width){
    y = y+len;
    x = 0;
  }
}

}