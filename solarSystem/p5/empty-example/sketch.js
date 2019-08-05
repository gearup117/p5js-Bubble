var sun;
var easyCamera;
var sunImg;
var pImg;
function preload(){
  sunImg = loadImage("sunmap.jpg");
}
function setup() {
  // put setup code here
  createCanvas(400,500,WEBGL);
  sun = new Planets(60,0,0,sunImg);
  sun.showMoon(5,1);
  }

function draw() {
  // put drawing code here
  
  easyCamera = new EasyCamera();
  background(0);
  lights();
  sun.show();
  
}