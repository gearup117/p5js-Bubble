//rate at which mutation will occur
var mr = 0.1;

function Vehicle(x, y, dna) {
  this.accleration = new createVector(0, 0);
  this.velocity = new createVector(0, -2);
  this.pos = new createVector(x, y);
  this.r = 4;
  this.desired;
  // max force at which it can travell
  this.maxSpeed = 3;
  //max turning force
  this.maxForce = 0.5;
  this.health = 1;
  this.dna = [];

  //if it dosent have parent or it is inital population of generation
  if (dna === undefined) {
    //food
    this.dna[0] = random(-5, 5);
    //poison
    this.dna[1] = random(-5, 5);
    //food
    this.dna[2] = random(0, 100);
    //poison
    this.dna[3] = random(0, 100);
  }
  //if it has spawned from parent 
  else {
    //mutation happens here
    this.dna[0] = dna[0];
    if (random(1) < mr) {
      this.dna[0] += random(-0.1, 0.1);
    }
    this.dna[1] = dna[1];
    if (random(1) < mr) {
      this.dna[1] += random(-0.1, 0.1);
    }

    this.dna[2] = dna[2];
    if (random(1) < mr) {
      this.dna[2] += random(-10, 10);
    }
    this.dna[3] = dna[3];
    if (random(1) < mr) {
      this.dna[3] += random(-10, 10);
    }
  }
  //gives birth
  this.clone = function () {
    if (random(1) < 0.001) {
      return new Vehicle(this.pos.x, this.pos.y, this.dna);
    } else {
      return undefined;
    }
  }
  this.eat = function (list, nutrition, dna) {
    var record = Infinity;
    var closet = null;
    var closetIndex = -1;
    //checks the closet food or poison to attract or avoid
    for (var i = 0; i < list.length; i++) {
      var d = dist(this.pos.x, this.pos.y, list[i].x, list[i].y);
      if (d < record) {
        closet = list[i];
        closetIndex = i;
        record = d;
      }
    }
    //if it player is close enough
    if (record < 5) {
      this.health += nutrition;
      list.splice(closetIndex, 1);
    } else if (closet != null && dist(this.pos.x, this.pos.y, closet.x,
        closet.y) <= dna) {
      return this.seek(closet);
    }
    return createVector(0, 0);

  }
  //checks if it  is dead or not
  this.dead = function () {
    if (this.health <= 0) {
      return true;
    } else {
      return false;
    }
  }
  //what a player will do in regards with food and poison
  this.behavior = function (good, bad) {
    var steerG = this.eat(good, 0.3, this.dna[2]);
    var steerB = this.eat(bad, -0.75, this.dna[3]);
    steerG.mult(this.dna[0]);
    steerB.mult(this.dna[1]);

    this.applyForce(steerG);
    this.applyForce(steerB);

  }
  //draws the player
  this.display = function () {
    //no idea of code cpoied code
    var theta = this.velocity.heading() + PI / 2;

    push();
    var gr = color(0, 255, 0);
    var rd = color(255, 0, 0);
    var col = lerpColor(rd, gr, this.health);
    translate(this.pos.x, this.pos.y);
    rotate(theta);
    if(debug.checked()){
    //food
    stroke(0, 255, 0);
    noFill();
    line(0, 0, 0, -this.dna[0] * 20);
    ellipse(0, 0, this.dna[2]);
    //poison
    stroke(255, 0, 0);
    noFill();
    line(0, 0, 0, -this.dna[1] * 20);
    ellipse(0, 0, this.dna[3]);
    }
    //draws player
    //dont know how this works just copied this piece of code
    fill(col);
    stroke(0);
    strokeWeight(1);
    beginShape();
    vertex(0, -this.r * 2);
    vertex(-this.r, this.r * 2);
    vertex(this.r, this.r * 2);
    endShape(CLOSE);
    pop();
  }
  //decreases health and adds force or moves the player
  this.update = function () {
    this.health -= 0.002;
    this.velocity.add(this.accleration);
    this.velocity.limit(this.maxSpeed);
    this.pos.add(this.velocity);
    this.accleration.mult(0);
  }
  this.applyForce = function (f) {
    this.accleration.add(f);

  }
  //actually makes the player move towards the food or  poison
  this.seek = function (target) {
    this.desired = p5.Vector.sub(target, this.pos);
    this.desired.normalize();
    this.desired.setMag(this.maxSpeed);

    var steer = p5.Vector.sub(this.desired, this.velocity);
    steer.limit(this.maxForce);
    //this.applyForce(steer);
    return steer;
  }
  //dosent let player go out of the screen
  this.bounce = function () {
    if (this.pos.x >= width - 20 || this.pos.x <= 20 ||
      this.pos.y >= height - 20 || this.pos.y <= 20) {
      //console.log("yash");
      //makes the player to  go towards the center of the screen
      var d = new createVector(width / 2, height / 2);
      this.desired = p5.Vector.sub(d, this.pos);
      this.desired.normalize();
      this.desired.setMag(this.maxSpeed);

      var steer = p5.Vector.sub(this.desired, this.velocity);
      steer.limit(this.maxForce);
      this.applyForce(steer);
    }
  }
}