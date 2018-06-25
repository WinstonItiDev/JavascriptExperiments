
var app = new PIXI.Application(800, 40, {backgroundColor : 0x1099bb});
document.getElementById("pixidisplay-3").appendChild(app.view);

var circle = new PIXI.Graphics();

var str = '#1C3144', num = parseInt(str.substring(1), 16);

var size = 1;

circle.position.set(1);

circle.x = app.screen.width / 2;
circle.y = app.screen.height / 2;

circle.lineStyle(0);
circle.beginFill(num, 1);
circle.drawCircle(0,0, 2);

circle.endFill();
app.stage.addChild(circle);

app.ticker.add(function(delta) {
  circle.scale.set(size);
  size = size + 0.1 * delta;
});

//Initializing functions

initRenderer();
draw();

