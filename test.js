const canvas = document.getElementById("pong");
var ctx = canvas.getContext("2d");
var Player = {
  y: 255,
  x: 0,
  point: 0,
  posPoint: 0,
  draw: function() {
    ctx.fillStyle = "white";
    ctx.font = "30px sans-serif";
    ctx.fillRect(this.x, this.y, 20, 90);
    ctx.fillText(this.point, this.posPoint, 45, 30);
  }
};

var ball = {
  x: 490,
  y: 290,
  sx: 5,
  sy: 4,
  draw: function() {
    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y, 20, 20);
  }
};
var player = Object.create(Player)
var opponent = Object.create(Player)
player.x = 16;
player.posPoint = 470;
opponent.posPoint = 515;
opponent.x = 964;

function draw() {
  setInterval()
  ctx.strokeStyle = "white";
  ctx.lineWidth = 5;
  ctx.lineJoin = "miter"
  //PlayGround
  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.lineTo(10, 590);
  ctx.lineTo(990, 590);
  ctx.lineTo(990, 10);
  ctx.closePath();
  ctx.stroke();
  //Center PlayGround
  ctx.beginPath();
  ctx.moveTo(500, 10);
  ctx.lineTo(500, 590);
  ctx.stroke();

  ball.draw();
  opponent.draw();
  player.draw();
}
draw();
