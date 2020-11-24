var fixedRect, movingRect,car,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car=createSprite(200,200,40,40)
  car.shapeColor="green"
  car.velocityX=10

  wall=createSprite(750,200,50,70)
  wall.shapeColor="red"

}
function draw() {

  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(car,wall)===true){
    car.shapeColor = "white";
    wall.shapeColor = "white";
  }

  drawSprites();
}



