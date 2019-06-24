let bubble =  [];
let bubble1,bubble2;
function setup() {
  createCanvas(600,600);
  bubble1 = new Bubble(300,300,50);
  bubble2 = new Bubble(200,500,90);
  // for(i = 0;i<0;i++){
  // bubble[i] = new Bubble(200,200,random(30,90));
  // bubble[i].draw();
  // }
}
function draw() {
  background(0,0,0);
  if(bubble1.overLap(bubble2))
    background(200,0,200);
  bubble1.draw();
  bubble2.draw();
  bubble1.x = mouseX;
  bubble1.y  = mouseY;
  // for(i = 0;i<bubble.length;i++){
  // bubble[i].mouseOver();
  // bubble[i].move();
  // }
}
function mousePressed(){
  // for(i=0;i<bubble.length;i++){
  //   if(bubble[i].contains(mouseX,mouseY)){
  //     print('yash');
  //     bubble.splice(1,1);
  //   }
  // }
}
class Bubble{
  constructor(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }
   draw(){
     stroke(255,255,255);
     strokeWeight(10);
     ellipse(this.x,this.y,this.r,this.r);
  }
  move(){
    this.x += random(-5,5);
    this.y += random(-5,5);
    fill(this.brightness,200);
    ellipse(this.x,this.y,this.r,this.r);
  }
  contains(x,y){
    let posi = dist(this.x,this.y,x,y);
    if(posi <= this.r)
      return true;
    else
      return false;
  }
  mouseOver(){
    if(this.contains(mouseX,mouseY))
        this.brightness = 255;
    else 
        this.brightness = 0;
    
  }
  overLap(other){

    return(dist(this.x,this.y,other.x,other.y)<=
         (this.r/2 + other.r/2))
  }
}