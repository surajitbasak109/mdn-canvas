function draw() {
	var canvas = document.getElementById('canvas');
	canvas.height = 300;
	canvas.width = 300;
	var ctx = canvas.getContext('2d');

	// left rectangles, rotate from origin
	ctx.save();
	
	// blue rect
	ctx.fillStyle = '#0095dd';
	ctx.fillRect(30, 30, 100, 100);
	ctx.rotate((Math.PI/180) * 25);

	// grey rect
	ctx.fillStyle = '#4d4e53';
	ctx.fillRect(30, 30, 100, 100);
	ctx.restore();

	// right rectangles, rotate from rectangular center
	// draw blue rect
	ctx.fillStyle = '#0095dd';
	ctx.fillRect(150, 30, 100, 100);

	ctx.translate(200, 80);	// translate to rectangle center
							// x = x + 0.5 * width
                          	// y = y + 0.5 * heigt
    ctx.rotate((Math.PI / 180) * 25);
    ctx.translate(-200, -80); // translate back

    // draw grey rect
    ctx.fillStyle = '#4d4e53';
    ctx.fillRect(150, 30, 100, 100);

}

window.addEventListener('load', function () {
	draw();
}, false);