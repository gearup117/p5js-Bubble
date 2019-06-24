
class Rain{
    z = random(5,20);
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.length = map(this.z,0,20,2,10);
        this.speed =  map(this.z,0,20,5,10);
        this.stWeight = map(this.z,0,20,1,3);
    }
    show(){
        strokeWeight(this.stWeight);
        stroke(138,43,226);
        line(this.x,this.y,this.x,this.y+this.length);
    }
    move(){
        if(this.y >= height){
            this.y = random(-100,-200);
        }
        else
            this.y = this.y + this.speed;
    }
}