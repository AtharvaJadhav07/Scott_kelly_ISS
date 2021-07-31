


var astronaut,Edges;

function preload(){
ISSImg=loadImage("iss.png")

brushImg=loadImage("brush.png");
drinkImg=loadAnimation("drink1.png","drink2.png");
eatImg=loadAnimation("eat1.png","eat2.png");
gymImg=loadAnimation("gym1.png","gym2.png");
rollImg=loadAnimation("gym11.png","gym12.png");
moveImg=loadAnimation("move.png","move1.png");
sleepImg=loadImage("sleep.png");
bathButton=loadImage("bathButton.png");
brushButton=loadImage("brushButton.jpg");
drinkButton=loadImage("bottleButton.png");
eatButton=loadImage("eatButton.png");
gymButton=loadImage("gym1Button.png");
rollButton=loadImage("rollButton.png");

}



function setup() {
  createCanvas(1000,500);

   //International Space Station
 ISS=createSprite(500,250,20,20);
 ISS.addImage(ISSImg); 
 ISS.scale=0.2;

  astronaut = createSprite(500,250);
  astronaut.addImage(sleepImg);
  astronaut.scale=0.1;
}

function draw() {
  background("black");  
 

  
 //creating Buttons 

//brushButton
BrushButton=createSprite(250,460,20,20);
BrushButton.addImage(brushButton); 
BrushButton.scale=0.3;

//drinkButton
DrinkButton=createSprite(400,430,20,20);
DrinkButton.addImage(drinkButton); 
DrinkButton.scale=0.3;

//eatButton
EatButton=createSprite(525,450,20,20);
EatButton.addImage(eatButton); 
EatButton.scale=0.3;

//gymButton
GymButton=createSprite(700,460,20,20);
GymButton.addImage(gymButton); 
GymButton.scale=0.3;

//rollButton
RollButton=createSprite(880,450,20,20);
RollButton.addImage(rollButton); 
RollButton.scale=0.3;






  if(mousePressedOver(EatButton)){ 
    astronaut.addAnimation("eat",eatImg);
    astronaut.changeAnimation("eat");
   astronaut.scale=0.1 
  }

  if(mousePressedOver(GymButton)){ 
    astronaut.addAnimation("gym",gymImg);
    astronaut.changeAnimation("gym");
   astronaut.scale=0.1 
   astronaut.setVelocityEach=0;

  }

  if(mousePressedOver(RollButton)){ 
    astronaut.addAnimation("Roll",rollImg);
    astronaut.changeAnimation("Roll");
   astronaut.scale=0.1 
  astronaut.setVelocityEach=0;
  }

  if(mousePressedOver(DrinkButton)){ 
    astronaut.addAnimation("drink",drinkImg);
    astronaut.changeAnimation("drink");
   astronaut.scale=0.1 
  }

  if(mousePressedOver(BrushButton)){ 
    astronaut.addAnimation("brush",brushImg);
    astronaut.changeAnimation("brush");
   astronaut.scale=0.1 
  astronaut.velocityX=1;
  astronaut.velocityY=-1;

}




    drawSprites();
}



