function draw() {
	var canvas = document.getElementById('canvas');
	canvas.width = 200;
	canvas.height = 130;
	var ctx = canvas.getContext('2d');

	var img = new Image();

	img.addEventListener('load', function () {
		ctx.drawImage(img, 0, 0);
		ctx.beginPath();
		ctx.moveTo(30, 96);
		ctx.lineTo(70, 66);
		ctx.lineTo(103, 76);
		ctx.lineTo(170, 15);
		ctx.stroke();
	}, false);

	img.src = 'https://mdn.mozillademos.org/files/5395/backdrop.png';
}

window.addEventListener('load', function () {
	draw();
}, false);