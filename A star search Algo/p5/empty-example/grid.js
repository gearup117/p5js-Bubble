function Spot(x, y) {
    this.x = x;
    this.y = y;
    //Dist from start to current Node
    this.g = 0;
    //Dist from current to end Node
    this.h = 0;
    //A * formula
    this.f = this.g + this.h;
    this.neighbour = [];
    this.previous = undefined;
    this.wall = false;
    if (random(1) < 0.2) {
        this.wall = true;
    }
    this.show = function (r, g, b) {
        fill(r, g, b);
        if (this.wall) {
            fill(0, 0, 0);
            rect(this.x * w, this.y * h, w, h);
        }
        rect(this.x * w, this.y * h, w, h);
    }
    //Gets the neighbor of each Node
    this.addNeighbour = function (grid) {
        var i = this.x;
        var j = this.y;
        if (i > 0)
            this.neighbour.push(grid[i - 1][j]);
        if (i < cols - 1)
            this.neighbour.push(grid[i + 1][j]);
        if (j < rows - 1)
            this.neighbour.push(grid[i][j + 1]);
        if (j > 0)
            this.neighbour.push(grid[i][j - 1]);
    }

}