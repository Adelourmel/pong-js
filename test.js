var x = null;
var y = null;
const player = document.getElementById("playerLeft"); 
const ball = document.getElementById("ball");
const right = document.getElementById("right");
const left = document.getElementById("left");
const content = document.getElementById("content")
const tesst = document.getElementById("tesst")
var ballX = 343;
var ballY = 247;
var test = false;
var colorRed = 0;
var colorBlue = 0;
var colorGreen = 0;
var ocolorRed = 0;
var ocolorBlue = 255;
var ocolorGreen = 255;
var incrementColor = 1;
var rdmchiffre = chfrdm();
var playerLeftY = 0;
var height;

function mOver(obj)
{
	obj.style.color = "#AFAFAF";
	obj.style.backgroundColor = "white";
}
function mOut(obj)
{
	obj.style.color = "white";
	obj.style.backgroundColor = "black"
}
function start(obj) 
{
	obj.style.display = "none"
	test = true;
    var id = setInterval(frame, 10);
    
    function frame() 
    {
        if (y> 1000) {
            clearInterval(id);
        } 
        else 
        {
        	console.log(ball.style.left + " " + ball.style.top)
  
        	ballX = ballX + rdmchiffre[0];
        	ballY = ballY + rdmchiffre[1];
        	verif();
        	color();
        	ball.style.top = ballY + "px"
        	ball.style.left = ballX + "px"

        }
    }
}


        	console.log("x = " + rdmchiffre[0] + " y = " + rdmchiffre[1])

document.addEventListener('mousemove', onMouseUpdate, false);


function onMouseUpdate(e) {
    x = e.pageX;
    y = e.pageY;

    if(y > 515)
    	y = 515;
    if(y < 102)
    	y = 102;
    y = y - 100;
    if (test)
    player.style.top = y + "px"
}
function chfrdm()
{
	var radm = [0, 0]
	radm[0] = Math.floor(Math.random()*3) + 2;
	radm[1] = Math.floor(Math.random()*3);
	return radm;

}
function verif()
{
	playerLeftY = player.style.top;
	ballT = ball.style.top;
	tesst.style.top = 70 + "px"
	height = tesst.style.top;
	console.log("Ball (" + ballX + ";" + ballT + ") playerLeftY(" + (70+"px") + playerLeftY + ")")
	if(ballY >= 480)
		rdmchiffre[1] = -rdmchiffre[1]
	if (ballY <= 6)
		rdmchiffre[1] = Math.abs(rdmchiffre[1])
	if (ballX >= 680)
		rdmchiffre[0] = -(rdmchiffre[0])
	if (ballX <= 10)
		rdmchiffre[0] = rdmchiffre[0]
	if (ballT > playerLeftY && ballT < ((72+"px")+playerLeftY) && ballX <= 20)
	{
		console.log("test")
		rdmchiffre[0] = Math.abs(rdmchiffre[0])
	}
}
function color()
{
	if (colorBlue == 255)
	{
		i = -1;
	}
	if (colorBlue == 0)
		i = 1;
	colorRed = i - colorRed;
	colorGreen = colorGreen + i;
	colorBlue = colorBlue + i;
	ocolorRed = i + ocolorRed;
	ocolorGreen = ocolorGreen - i;
	ocolorBlue = ocolorBlue - i;

	console.log("rgb(" + colorRed + ", " + colorGreen + ", " + colorBlue + ")")
	content.style.borderColor = "rgb(" + colorRed + ", " + colorGreen + ", " + colorBlue + ")"
	left.style.borderColor = "rgb(" + ocolorRed + ", " + ocolorGreen + ", " + ocolorBlue + ")"
	right.style.borderColor = "rgb(" + ocolorRed + ", " + ocolorGreen + ", " + ocolorBlue + ")"
}