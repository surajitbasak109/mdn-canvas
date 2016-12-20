function draw() {
	var ctx = document.getElementById('canvas').getContext('2d');
	
	// draw a simple rectangle, but scale it
	ctx.save();
	ctx.scale(10, 3);
	ctx.fillRect(1, 10, 10, 10);
	ctx.restore();
	
	// mirror horizontally
	ctx.scale(-1, 1);
	ctx.font = '28px Lucida Grande, Ubuntu, Arial, sans-serif';
	ctx.fillText('MOZILLA', -135, 120);

}

window.addEventListener('load', function () {
	draw();
}, false);