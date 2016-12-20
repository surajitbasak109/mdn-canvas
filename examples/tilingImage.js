function draw() {
	var ctx = document.getElementById('canvas').getContext('2d');

	var img = new Image();

	img.addEventListener('load', function () {
		for (var r = 0; r < 4; r++) {
			for (var c = 0; c < 3; c++) {
				ctx.drawImage(img, c * 50, r * 38, 50, 38);
			}
		}
	}, false);

	img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
}

window.addEventListener('load', function () {
	draw();
}, false);