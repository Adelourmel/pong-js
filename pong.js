const canvas = document.getElementById("pong");
var ctx = canvas.getContext("2d");
var id = null;
var y = 10;
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
  sx: 2,
  sy: -3,
  dx: 1,
  dy: 1,
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
var id = setInterval(draw, 50)
function draw() {
  ctx.strokeStyle = "white";
  ctx.lineWidth = 5;
  ctx.lineJoin = "miter"
  //PlayGround
  ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
  ctx.fillRect(0, 0, canvas.width, canvas.height)
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


  animate();

  opponent.draw();
  player.draw();
  ball.draw();


}
function animate () {
  if (ball.y + ball.sy <= 15)
    ball.dy = -ball.dy;
  if (ball.y + ball.sy >= canvas.height - 35)
    ball.dy = -ball.dy;
  if (player.y > canvas.height-105)
    player.y = canvas.height-105;
  if (player.y < 15)
      player.y = 15;
  if (ball.y < player.y + 90 && ball.y > player.y && ball.x <= 34 && ball.x > 24)
    ball.dx = -ball.dx;
  if (ball.y < opponent.y + 90 && ball.y > opponent.y && ball.x >= canvas.width - 34 && ball.x < canvas.width - 24)
    ball.dx = -ball.dx;
  if (ball.x < 15) {
    opponent.point ++
    ball.x = 490;
    ball.y = 290;
  }
  if (opponent.y > canvas.height-105)
    opponent.y = canvas.height-105;
  if (opponent.y < 15)
      opponent.y = 15;
  if (ball.x > canvas.width - 15) {
    player.point ++
    ball.x = 490;
    ball.y = 290;
  }
  if (ball.x > 100)
    opponentAi();

  ball.x = ball.x + ball.sx * ball.dx;
  ball.y = ball.y + ball.sy * ball.dy;

  /*ball.sx = Math.floor(Math.random()*4);
  ball.sy = Math.floor(Math.random()*4);*/
}
function game(e) {
  console.log(e  + "player.y = " + player.y)
  if (e.key == "x" || e.key == "X")
  {
    opponent.y = opponent.y + 15;
  }
  if (e.key == "s" || e.key == "S")
  {
    opponent.y = opponent.y - 15;
  }
  draw();

}
function opponentAi() {
  if (ball.y < opponent.y + 45)
    player.y -= 3;
  if (ball.y > opponent.y + 45)
    player.y += 3;
}
const keyEvent = () => {window.addEventListener("keydown", game)};
keyEvent();
draw();
