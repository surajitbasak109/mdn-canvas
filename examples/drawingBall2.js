var canvas = document.getElementById('canvas');
canvas.width = 600;
canvas.height = 300;
canvas.style.border = '1px solid grey';
var ctx = canvas.getContext('2d');
var raf;

var ball = {
	x: 100,
	y: 100,
	vx: 5,
	vy: 2,
	radius: 25,
	color: 'darkgreen',
	draw: function () {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
		ctx.closePath();
		ctx.fillStyle = this.color;
		ctx.fill();
	}
};

function draw() {
	ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ball.draw();
	ball.x += ball.vx;
	ball.y += ball.vy;

	ball.vy *= .99;
	ball.vy += .25;

	if (ball.y + ball.vy > canvas.height ||
		ball.y + ball.vy < 0) {
		ball.vy = -ball.vy;
	}

	if (ball.x + ball.vx > canvas.width ||
		ball.x + ball.vx < 0) {
		ball.vx = -ball.vx;
	}
	raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener('mouseover', function (e) {
	raf = window.requestAnimationFrame(draw);
}, false);

canvas.addEventListener('mouseout', function (e) {
	window.cancelAnimationFrame(raf);
}, false);

ball.draw();