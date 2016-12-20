function draw() {
	var canvas = document.getElementById('canvas');
	canvas.width = 250;
	canvas.height = 250;
	var ctx = canvas.getContext('2d');
	
	var sin = Math.sin(Math.PI/6);
	var cos = Math.cos(Math.PI/6);
	ctx.translate(100, 100);
	var c = 0;
	
	for (var i = 0; i <= 12; i++) {
    c = Math.floor(255/12*i);
		ctx.fillStyle = 'rgb('+ c +', '+ c +', '+ c +')';
		ctx.fillRect(0, 0, 100, 10);
		ctx.transform(cos, sin, -sin, cos, 0, 0);
  }
	
	ctx.setTransform(-1, 0, 0, 1, 100, 100);
	ctx.fillStyle = 'rgba(55, 128, 255, 0.5)';
	ctx.fillRect(0, 50, 100, 100);

}

window.addEventListener('load', function () {
	draw();
}, false);