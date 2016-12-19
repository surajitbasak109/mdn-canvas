function draw() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	
	ctx.shadowOffsetX = 2;
	ctx.shadowOffsetY = 2;
	ctx.shadowBlur = 2;
	ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';

	ctx.font = '20px Ubuntu, Arial, sans-serif'; 
	ctx.fillStyle = "Black"
	ctx.fillText("A simple Text", 5, 30);
}
