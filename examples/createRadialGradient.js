function draw() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	
	//create gradients
	var radgrad = ctx.createRadialGradient(45, 45, 10, 52, 50, 30);
	radgrad.addColorStop(0, '#a7d30c');
	radgrad.addColorStop(0.9, '#019f62');
	radgrad.addColorStop(1, 'rgba(1, 159, 98, 0)');
	
	var radgrad2 = ctx.createRadialGradient(105, 105, 20, 112, 120, 50);
	radgrad2.addColorStop(0, '#ff5f98');
	radgrad2.addColorStop(0.75, '#ff0188');
	radgrad2.addColorStop(1, 'rgba(255, 1, 136, 0)');
	
	var radgrad3 = ctx.createRadialGradient(95, 15, 15, 102, 20, 40);
	radgrad3.addColorStop(0, '#00c9ff');
	radgrad3.addColorStop(0.8, '#00b5e2');
	radgrad3.addColorStop(1, 'rgba(0, 201, 255, 0)');
	
	var radgrad4 = ctx.createRadialGradient(0, 150, 50, 0, 140, 90);
	radgrad4.addColorStop(0, '#f4f201');
	radgrad4.addColorStop(0.8, '#e4c700');
	radgrad4.addColorStop(1, 'rgba(228, 199, 0, 0)');

	// draw shapes
	ctx.fillStyle = radgrad4;
	ctx.fillRect(0, 0, 150, 150);	
	ctx.fillStyle = radgrad3;
	ctx.fillRect(0, 0, 150, 150);
	ctx.fillStyle = radgrad2;
	ctx.fillRect(0, 0, 150, 150);
	ctx.fillStyle = radgrad;
	ctx.fillRect(0, 0, 150, 150);
}
