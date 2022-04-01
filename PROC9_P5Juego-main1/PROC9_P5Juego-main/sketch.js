var cuadrín;
function setup() {
  createCanvas(400,400);
  cuadrín=createSprite (200,180,30,30);
}



function draw() 
{
  background(30);
/*cuadrín.velocityY=3;
cuadrín.velocityX=3*/
if (keyIsDown(RIGHT_ARROW)){
cuadrín.position.x=cuadrín.position.x+5;
}
if (keyIsDown(LEFT_ARROW)){
cuadrín.position.x=cuadrín.position.x -5;
}
if (keyIsDown(DOWN_ARROW)){
  cuadrín.position.y=cuadrín.position.y +5;
}
if (keyIsDown(UP_ARROW)){
  cuadrín.position.y=cuadrín.position.y -5;
}



   drawSprites();
}




