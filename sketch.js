
var ground, player;
var back_img;
var pf1


function preload(){

back_img = loadImage('day_background1.png')

}

function setup() {
  createCanvas(800,400);   

  ground = createSprite (400,390,800,20);
  player = createSprite (20,355,25,25);
  player.shapeColor = ("red");
  


}

function draw() {
  background(back_img); 
  player.velocityX=0
  
  player.collide(ground);

  if (keyDown("UP_ARROW")){
    player.velocityY = -4
  }

  if (keyDown("LEFT_ARROW")){
    player.velocityX = -4
  }
 
  if (keyDown("RIGHT_ARROW")){
    player.velocityX = 4
  }
  
  if(frameCount%100 == 0){
    
   var randHeight = random(200, 370);
   var randWidth = random(80, 200)
   pf1= createSprite (785, randHeight, randWidth, 10 )
   pf1.velocityX = -5
   
  }
  
  player.collide (pf1);
  
  
  
  player.velocityY = player.velocityY + 1

  drawSprites();



}