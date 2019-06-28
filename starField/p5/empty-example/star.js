class Star{
    speed = 10;
    constructor(){
        this.x = random(-width,width);
        this.y = random(-height,height);
        this.z = random(width);
    }
    show(){
        stroke(255);
        fill(255);
        this.r = map(this.z,0,width,5,0);
        ellipse(this.sx,this.sy,this.r,this.r);
        this.psx = this.sx;
        this.psy = this.sy;
        line(this.x,this.y,this.sx,this.sy);
    }
    update(){
        //thispeed = map(mouseX,0,width,0,10);
        this.z= this.z - this.speed;
        if(this.z < 1){
        this.x = random(-width,width);
        this.y = random(-height,height);
        this.z = width;
        }
    }
    move(){
        this.sx = map(this.x/this.z,0,1,0,width);
        this.sy = map(this.y/this.z,0,1,0,height);
        
    }
}