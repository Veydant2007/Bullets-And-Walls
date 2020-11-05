
var bullet, wall
var speed,weight,thickness
var damage


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 20, 5);
  bullet.shapeColor = (255,255,255)
  weight = random (30,52);
  speed = random (223,321);
  thickness = random ( 22,83 )
  bullet.velocityX = speed;
  damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
  wall = createSprite(1200,200,thickness,height/2)
}

function draw() {
  background(255,255,255); 
  if (bullet.isTouching(wall)){
    bullet.velocityX = 0
  
  if (bullet.velocityX == 0){
    textSize(24)
    text(damage,1300,350)
  }
  if(damage < 10  ){
    bullet.shapeColor = "green"
  }

  if(damage > 10 ){
    bullet.shapeColor = "red"
  }
}
  drawSprites();
}