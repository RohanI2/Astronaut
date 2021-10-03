var spacestation;
var sleep;
var gym;


function draw() {
  
  background(spacestation);
 
 if (keyDown("up")){
   astronaut.visible=true;
   astronaut.addAnimation("Bath",bath);
   astronaut.changeAnimation("Bath");
   astronaut.y=600;
   astronaut.velocityX=0;
   astronaut.velocityY=0;
   astronaut.scale=0.15
 }
 if (keyDown("down")){
   astronaut.visible=true;
   astronaut.addAnimation("Gym",gym)
   astronaut.changeAnimation("Gym");
   astronaut.y=600;
   astronaut.velocityX=0;
   astronaut.velocityY=0;
   astronaut.scale=0.15
}
 if (keyDown("space")){
   astronaut.visible=true;
   astronaut.addAnimation("Drink",drink)
   astronaut.changeAnimation("Drink");
   astronaut.y=600;
   astronaut.velocityX=0;
   astronaut.velocityY=0;
   astronaut.scale=0.15
}
 if(keyDown("right")){
   astronaut.x=astronaut.x+5
 }
 if(keyDown("left")){
  astronaut.x=astronaut.x-5
}
  drawSprites();
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  astronaut=createSprite(600,600);
  //astronaut.visible=false;
  astronaut.visible=false;
  /*astronaut.addAnimation("Gym", gym);
  astronaut.scale=0.15;*/
  
 
}

function preload()
{
bath=loadAnimation("images/bath1.png","images/bath2.png");
brush=loadImage("images/brush.png");
drink=loadAnimation("images/drink1.png","images/drink2.png");
eat=loadAnimation("images/eat1.png","images/eat2.png");
move=loadAnimation("images/move.png","images/move1.png");
spacestation=loadImage("images/iss.png");
gym=loadAnimation("images/gym1.png","images/gym2.png");
  sleep=loadImage("images/sleep.png");
  astronaut.addAnimation("Gym", gym);

}