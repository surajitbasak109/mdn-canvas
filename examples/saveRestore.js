function draw() {
	var ctx = document.getElementById('canvas').getContext('2d');
	ctx.fillRect(0, 0, 150, 150);		// draw a rectangle with default settings
	ctx.save();							// save the default state

	ctx.fillStyle = '#09f';				// make changes to the settings
	ctx.fillRect(15, 15, 120, 120);		// draw a rectangle with new settings

	ctx.save();							// save the current state
	ctx.fillStyle = '#fff';				// make changes to the settings
	ctx.globalAlpha = 0.5;
	ctx.fillRect(30, 30, 90, 90);		// draw a rectangle with new settings

	ctx.restore();						// restore previous state
	ctx.fillRect(45, 45, 60, 60);		// draw a rectangle with restored settings

	ctx.restore();						// restore original state
	ctx.fillRect(60, 60, 30, 30);		// draw a rectangle with restored settings
}

window.addEventListener('load', function () {
	draw();
}, false);