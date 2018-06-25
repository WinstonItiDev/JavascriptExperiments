
var renderer;
var graphics;

var widthOfScreen = 800;
var heightOfScreen = 80;

var circles = [];

function initRenderer() {

	renderer = new PIXI.Application(widthOfScreen, heightOfScreen, { antialias: true });
	document.getElementById("pixidisplay-2").appendChild(renderer.view);

	graphics = new PIXI.Graphics();

	for (var i = 0; i < 500; i++) {
		circles[i] = new CircleShape(Math.floor((Math.random() * widthOfScreen) + 1), Math.floor((Math.random() * heightOfScreen) + 1), Math.floor((Math.random() * 2) + 1));
	}
	
}

function draw() {
	console.log("drawing 2..");

	for (var i = 0; i < 500; i++) {
		circles[i].drawCircleShape();
	}


}

function CircleShape(_x, _y, _s) {

	this.x = _x;
	this.y = _y;
	this.s = _s;

	var str = '#1C3144', num = parseInt(str.substring(1), 16);

	this.drawCircleShape = function drawCircleShape() {

	graphics.lineStyle(0);
	graphics.beginFill(num, 1);
	graphics.drawCircle(this.x, this.y,this.s);
	graphics.endFill();

	renderer.stage.addChild(graphics);

	}
}

initRenderer();
draw();

