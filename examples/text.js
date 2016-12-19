function draw() {
	var ctx = document.getElementById('canvas').getContext('2d');
	ctx.font = '48px serif';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'hanging';
	ctx.strokeText('Hello', 50, 50);
	ctx.fillText('World!', 70, 100);
	var text = ctx.measureText('foo');
	console.log(text.width);
}
