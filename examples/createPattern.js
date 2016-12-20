function draw() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');

	// create new image object to use as pattern
	var img = new Image();
	img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
	img.addEventListener('load', function () {
		var ptrn = ctx.createPattern(img, 'repeat');
		ctx.fillStyle = ptrn;
		ctx.fillRect(0, 0, 150, 150);
	});

}

window.addEventListener('load', function () {
	draw();
}, false);