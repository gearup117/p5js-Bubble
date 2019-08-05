function Vehicle(x, y) {
    this.accleration = new createVector(0, 0);
    this.velocity = new createVector(random(-2, 2), random(-2, 2));
    this.pos = new createVector(x, y);
    this.r = 4;
    this.desired;
    this.maxSpeed = 4;
    this.maxForce = 0.05;
    this.update = function () {
        this.velocity.add(this.accleration);
        this.velocity.limit(this.maxSpeed);
        this.pos.add(this.velocity);
        this.accleration.mult(0);
    }
    this.applyForce = function (f) {
        this.accleration.add(f);

    }
    this.bounce = function () {
        if (this.pos.x >= width - 20 || this.pos.x <= 20 ||
            this.pos.y >= height - 20 || this.pos.y <= 20) {
            //console.log("yash");
            var d = new createVector(width / 2, height / 2);
            this.desired = p5.Vector.sub(d, this.pos);
            this.desired.normalize();
            this.desired.setMag(this.maxSpeed);

            var steer = p5.Vector.sub(this.desired, this.velocity);
            steer.limit(this.maxForce);
            this.applyForce(steer);
        }
    }
    this.display = function () {
        var theta = this.velocity.heading() + PI / 2;
        fill(127);
        stroke(0);
        strokeWeight(1);
        push();
        translate(this.pos.x, this.pos.y);
        rotate(theta);
        fill(127);
        stroke(0);
        strokeWeight(1);
        beginShape();
        vertex(0, -this.r * 2);
        vertex(-this.r, this.r * 2);
        vertex(this.r, this.r * 2);
        endShape(CLOSE);
        pop();
    }

}