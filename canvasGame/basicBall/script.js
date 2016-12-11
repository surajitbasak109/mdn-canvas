// Getting canvas element
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// Defining ball properties like colors, its radius etc.
var ballRadius = 10;
var ballColor = "black";
var diffColors = ["red", "darkcyan", "green", "maroon", "black", "blue", "orange", "chocolate", "brown", "darkblue", "navy", "darkgreen", "darkorchid"];

// Position of the ball
var x = canvas.width / 2;
var y = canvas.height - 30;

var dx = 2;
var dy = -2;

// Defining paddle width, height and its position
var paddleWidth = 75;
var paddleHeight = 10;
var paddleX = (canvas.width - paddleWidth) / 2;

// defining two variables for key press with false value
var rightPressed = false;
var leftPressed = false;

// Setting up the brick variables
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

// Define a score variable
var score = 0;

// Giving player 3 lives to play
var lives = 3;

// Define a cleartimeout id
var timeoutID;
var proceed = true;

// difining an empty array
var bricks = [];
// It will contain the brick columns (c), which in turn will
// contain the brick rows (r), which in turn will each contain
// an object containing the x and y position to paint each
// brick on the screen
for (var c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (var r = 0; r < brickRowCount; r++) {
        bricks[c][r] = {
            x: 0,
            y: 0,
            status: 1
        };
    }
}

// attaching events
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
document.addEventListener('mousemove', mouseMoveHandler, false);

// a function to detect left and right keydown combination
function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true;
    } else if (e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    } else if (e.keyCode == 37) {
        leftPressed = false;
    }
}

function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if (relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth / 2;
    }
}

function collisionDetection() {
    for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            var b = bricks[c][r];
            if (b.status == 1) {
                if (
                    x > b.x &&
                    x < b.x + brickWidth &&
                    y > b.y &&
                    y < b.y + brickHeight
                ) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if (score == brickRowCount * brickColumnCount) {
                        victory();
                    }
                }
            }
        }
    }
}

function drawBall() {
    ctx.beginPath();
    ctx.fillStyle = ballColor;
    ctx.fillSTroke = '#0033ff';
    ctx.Stroke = "10";
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.fillStyle = "0095dd";
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fill();
    ctx.closePath();
}

function drawBricks() {
    for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            if (bricks[c][r].status == 1) {
                var brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                var brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.fillStyle = "0095dd";
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function drawScore() {
    ctx.beginPath();
    ctx.fillStyle = "chocolate";
    ctx.font = "16px Ubuntu, Arial, sans-serif";
    ctx.fillText("Score: " + score, 8, 20);
    ctx.closePath();
}

function drawLives() {
    ctx.fillStyle = "#0095dd";
    ctx.font = "16px Ubuntu, Arial, sans-serif";
    ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
}

function game_over() {
    ctx.beginPath();
    ctx.fillStyle = "rgba(255,0,0,0.75)";
    ctx.rect(0, 0, 480, 320);
    ctx.fill();
    ctx.fillStyle = "White";
    ctx.font = "24px Lora, Helvetica, Arial, sans-serif";
    ctx.fillText("You Lose", 200, 100);
    ctx.font = "48px Lora, Helvetica, Arial, sans-serif";
    ctx.fillText("Game Over", 120, 180);
    ctx.font = "24px Lora, Helvetica, Arial, sans-serif";
    ctx.fillText("Reload the page to play again.", 100, 280);
    ctx.closePath();
    proceed = false;
    document.getElementById('normal').setAttribute('disabled', true);
    document.getElementById('hard').setAttribute('disabled', true);
    clearTimeout(timeoutID);
}

function victory() {
    ctx.beginPath();
    ctx.fillStyle = "rgba(0,0,255,0.75)";
    ctx.rect(0, 0, 480, 320);
    ctx.fill();
    ctx.fillStyle = "White";
    ctx.font = "48px Lora, Helvetica, Arial, sans-serif";
    ctx.fillText("Victory!!!", 160, 100);
    ctx.font = "24px Lora, Helvetica, Arial, sans-serif";
    ctx.fillText("CONGRATULATIONS, YOU WON", 60, 180);
    ctx.font = "20px Lora, Helvetica, Arial, sans-serif";
    ctx.fillText("Reload the page to play again.", 100, 280);
    ctx.closePath();
    proceed = false;
    document.getElementById('normal').setAttribute('disabled', true);
    document.getElementById('hard').setAttribute('disabled', true);
    clearTimeout(timeoutID);
}

function draw() {
    if (proceed) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBricks();
        drawBall();
        drawPaddle();
        drawScore();
        drawLives();
        collisionDetection();
        if (
            x + dx > canvas.width - ballRadius ||
            x + dx < ballRadius
        ) {
            dx = -dx;
            ballColor = diffColors[Math.floor(Math.random() * diffColors.length)];
        }
        if (y + dy < ballRadius) {
            dy = -dy;
            ballColor = diffColors[Math.floor(Math.random() * diffColors.length)];
        } else if (y + dy > canvas.height - ballRadius) {
            if (x > paddleX && x < paddleX + paddleWidth) {
                dy = -dy;
            } else {
                lives--;
                if (!lives) {
                    game_over();
                } else {
                    x = canvas.width / 2;
                    y = canvas.height - 30;
                    dx = 3;
                    dx = -3;
                    paddleX = (canvas.width - paddleWidth) / 2;
                }
            }
        }
        if (rightPressed && paddleX < canvas.width - paddleWidth) {
            paddleX += 7;
        } else if (leftPressed && paddleX > 0) {
            paddleX -= 7;
        }
        x += dx;
        y += dy;
    }
}

/*
When document loads on the browser, for the viewing purpose
We will load an image
*/

var img = new Image();
img.src = "https://i.imgur.com/32NAgjO.png";
window.addEventListener('load', function() {
    ctx.beginPath();
    ctx.drawImage(img, 0, 0);
    ctx.closePath();
});
var interval = 12;
document.getElementById('normal').addEventListener('click', function() {
    interval = 10;
    timeoutID = setInterval(draw, interval);
}, false);
document.getElementById('hard').addEventListener('click', function() {
    interval = 7;
    timeoutID = setInterval(draw, interval);
}, false);