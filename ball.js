var canvas = document.getElementById('pong');
var ctx = canvas.getContext("2d");


var ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,

  draw: function() {
    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y, 20, 20);
  }
};

function draw() {
  ball.draw();


}
draw();
