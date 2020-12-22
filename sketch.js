var rect1,rect2;


function setup() {

  createCanvas(800,400);
   rect1 =createSprite(400, 100, 50, 50);
   rect2 = createSprite(400,300,50,50);

   rect1.debug = true;
   rect2.debug = true;

   rect1.velocityY = 4;
   rect2.velocityY = -4;
}

function draw() {
  background(255,255,255);  
    bounceOff(rect1,rect2);
    if(isTouching(rect1,rect2)){
      rect1.x = 100;
      rect2.x = 200;
    } else{
      rect1.shapeColor = color(230,250,0);
      rect2.shapeColor = color(55,100,0);
    }
     drawSprites();
}

