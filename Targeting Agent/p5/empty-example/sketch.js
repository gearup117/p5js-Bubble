var w,h;
var speed = 2;
var a,b
var player;
var target;
function setup() {
  // put setup code here
  createCanvas(200,200);
  w = width/2;
  h = height/2;
  a =15;
  b = 5;
  player = new Vehicle(width/2,height/2);
  
}

function draw() {
  background(200,200,200);
  fill(240,240,240);
  target = new createVector(mouseX,mouseY);
  // triangle(w,h,w,h+10,w+a,h+b);
  // w += speed;
  // if(w+a >= width || w+a <= 0){
  //   speed = -speed;
  //   a = -a;
  // }
  ellipse(target.x,target.y,30,30);
  player.seek(target);
  player.display();
  player.update();
}
function Vehicle(x,y){
  this.accleration = new createVector(0,0);
  this.velocity = new createVector(0,-2);
  this.pos = new createVector(x,y);
  this.r = 6;
  this.desired;
  this.maxSpeed = 10;
  this.maxForce = 0.1;
  this.display = function(){
    var theta = this.velocity.heading() + PI/2;
    fill(127);
    stroke(0);
    strokeWeight(1);
    push();
    translate(this.pos.x,this.pos.y);
    rotate(theta);
    beginShape();
    vertex(0, -this.r*2);
    vertex(-this.r, this.r*2);
    vertex(this.r, this.r*2);
    endShape(CLOSE);
    pop();
  }
  this.update = function(){
    this.velocity.add(this.accleration);
    this.velocity.limit(this.maxSpeed);
    this.pos.add(this.velocity);
    this.accleration.mult(0);
  }
  this.applyForce = function(f){
      this.accleration.add(f);

  }
  this.seek = function(target){
    this.desired = p5.Vector.sub(target, this.pos);
    this.desired.normalize();
    this.desired.setMag(this.maxSpeed);

    var steer = p5.Vector.sub(this.desired,this.velocity);
    steer.limit(this.maxForce);
    this.applyForce(steer);

  }
}