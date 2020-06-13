var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var bullet = 1;
var mposX;
var mposY;
var targetX;
var targetY;
var targetRadius;
var distance;
var score = 0;
var lives = 10;
var color = "green";

document.addEventListener("click", mousePosition);

//getting coordinates of mouse click
function mousePosition(event) {
    if (lives != 0 && bullet == 1) {
        mposX = event.clientX ;
        mposY = event.clientY ;
        detectHits();
    }
}

//calculating distance between target center and mouse click to detect hits
function detectHits() {
    distance = Math.round(Math.sqrt(Math.pow((targetX - mposX), 2) + Math.pow((targetY - mposY), 2)));
    if (distance <= targetRadius) {
        bullet = 0;
        if (distance < 3) {
            drawTarget("black");
            score = score + 10;
        }else {
            drawTarget("black");
            score = score + 5;
        }
    }else {
        drawTarget("black");
        lives--;
    }
    document.getElementById('score').innerHTML = "Score: " + score + " Lives: " + lives;
}

//setting target coordinates
function target() {
    bullet = 1;
    ctx.clearRect(0, 0, 1000, 600);
    targetX = Math.floor((Math.random() * 600) + 20);
    targetY = Math.floor((Math.random() * 300) + 20);
    targetRadius = Math.floor((Math.random() * 10) + 4);
    if (lives != 0) {
        drawTarget("black");
    }else {
        ctx.clearRect(0, 0, 1000, 600);
        document.getElementById('score').innerHTML = "Game Over";
        clearInterval(game);
    }
}

//drawing target
function drawTarget(color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(targetX,targetY,targetRadius,0,2 * Math.PI);
    ctx.closePath();
    ctx.fill();
}

var game = setInterval(target ,400);