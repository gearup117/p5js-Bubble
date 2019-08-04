var food = [];
var poison = [];
var vehicle = [];
var target;
var debug;
function setup() {
  // put setup code here
  createCanvas(350, 200);
  //vehicles
  for (var i = 0; i < 10; i++) {
    var x = random(0, width);
    var y = random(0, height);
    vehicle.push(new Vehicle(x, y));
  }
  //food
  for (var i = 0; i < 10; i++) {
    var x = random(0, width);
    var y = random(0, height);
    food.push(createVector(x, y));
  }
  //poison
  for (var i = 0; i < 5; i++) {
    var x = random(0, width);
    var y = random(0, height);
    poison.push(createVector(x, y));
  }
 debug = createCheckbox();
}

function draw() {
  background(0, 0, 0);
  fill(200, 200, 200);
  //spawns food
  if (random(1) < 0.1) {
    var x = random(0, width);
    var y = random(0, height);
    food.push(createVector(x, y));
    //console.log(food.length);
  }
  //spawns poison 
  if (random(1) < 0.01) {
      var x = random(0, width);
      var y = random(0, height);
      poison.push(createVector(x, y));
    
  }
  //draws food
  for (var i = 0; i < food.length; i++) {
    fill(0, 255, 0);
    stroke(0, 255, 0);
    ellipse(food[i].x, food[i].y, 1, 1);
  }
  //draws poison
  for (var i = 0; i < poison.length; i++) {
    fill(255, 0, 0);
    stroke(255, 0, 0);
    ellipse(poison[i].x, poison[i].y, 1, 1);
  }
  //Updates the vehicle
  for (var i = vehicle.length - 1; i >= 0; i--) {
    vehicle[i].behavior(food, poison);
    //vehicle.seek(target);
    vehicle[i].display();
    vehicle[i].update();
    vehicle[i].bounce();
    //gets the copy of child
    var newVehicle =  vehicle[i].clone();
    if(newVehicle){
      vehicle.push(newVehicle);
    }
    if (vehicle[i].dead()) {
      var x = vehicle[i].pos.x;
      var y = vehicle[i].pos.y;
      food.push(createVector(x,y));
      vehicle.splice(i, 1);
    }

  }

}