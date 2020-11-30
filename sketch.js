var bullet,wall,thickness;
var speed,weight;
var damage = 0.5*weight*speed*speed/thickness*thickness*thickness;
function setup() {
  createCanvas(1600,400);
  speed = random(223,321)
  weight = random(30,52)
  thickness = random(22,83)
  bullet = createSprite(50,200,50,10)
  bullet.velocityX = speed;
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color (80,80,80);
}

function draw() {
  background(255,255,255);
  if(bullet.isTouching(wall)){
    bullet.collide(wall)
    damage = 0.5*weight*speed*speed/thickness*thickness*thickness;
    if (damage>10) {
    bullet.shapeColor = 'green'  
    }
    if (damage<180 && damage>100) {
      bullet.shapeColor = 'yellow'
    }
    if (damage<10) {
    bullet.shapeColor = 'red'  
    }
    }
  drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x + bullet.width
  wallLeftEdge = wall.x
  if(bulletRightEdge >= wallLeftEdge){
    return true
  }
  else{
    return false
  }
}