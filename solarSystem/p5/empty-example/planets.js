class Planets{
    planets = [];
    v;
    constructor(r,d,angle,texture){
        this.t = texture;
        this.v = p5.Vector.random3D();
        this.distance = d;
        this.v.mult(this.distance);
        this.r = r;
        this.angle = angle;
        this.rSpeed = random(-0.05,0.05);
    }

    showMoon(total,level){

        this.planets = new Array(total);
        for(var i = 0;i<this.planets.length;i++){
            var r = this.r*0.5;
            var d = random(100,200);
            var a = random(10,TWO_PI);
            this.planets[i] = new Planets(r,d/level,a);
            if(level < 2){
                this.planets[i].showMoon(1,level+1);
            }
            if(this.rSpeed == 0){
                this.rSpeed = random(-0.05,0.05);
            }
    
        }
    }
    show(){
        
        push(); 
        var v2 = new createVector(1,0,1);
        var p = p5.Vector.cross(this.v, v2);
        //fill(255,0,0);
        texture(this.t);
        noStroke();
        //rotate(this.angle,p.x,p.y,p.z);
        rotateX(this.angle+p.x);
        rotateY(this.angle+p.x);
        rotateZ(this.angle+p.x);
        stroke(255); 
        this.angle += this.rSpeed;
        translate(this.v.x,this.v.y,this.v.z);
        sphere(this.r);''
        if(this.planets!= null){
        for(var i = 0;i<this.planets.length;i++){
            this.planets[i].show();
        }
        pop();
    }
    }
}