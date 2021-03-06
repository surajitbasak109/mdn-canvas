function draw () {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');

	// create gradient
	var lingrad = ctx.createLinearGradient(0,0,0,150);
	lingrad.addColorStop(0, '#00ABEB');
	lingrad.addColorStop(0.5, '#fff');
	lingrad.addColorStop(0.5, '#26c000');
	lingrad.addColorStop(1, '#fff');

 	var lingrad2 = ctx.createLinearGradient(0, 50, 0, 95);
  	lingrad2.addColorStop(0.5, '#000');
  	lingrad2.addColorStop(1, 'rgba(0, 0, 0, 0)');

	// assign gradients to fill and stroke styles
	ctx.fillStyle = lingrad;
	ctx.strokeStyle = lingrad2;

	// draw shapes
	ctx.fillRect(10, 10, 130, 130);
	ctx.strokeRect(50, 50, 50, 50);
}

window.addEventListener('load', function () {
	draw();
}, false);