var bg, bgImage;

var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var invisibleGround;
var survivaltime=0;
var score=0;
var gameover, gameoverImage;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  bgImage=loadImage("jungle.jpg");
  gameoverImage=loadImage("gameover.png")
}



function setup() {
createCanvas(600,600);
 
bg=createSprite(400,0); 
bg.addImage("background",bgImage);
bg.scale=3;
  
  
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving", monkey_running) ;
monkey.scale=0.1;
  

  
invisibleGround = createSprite(400,550,900,10);
invisibleGround.visible = false;
  
gameover=createSprite(280,300) 
gameover.addImage(gameoverImage);
gameover.scale=0.2;
gameover.visible=false;
 
score=0;

  bananaGroup=createGroup();
  obstacleGroup=createGroup();
  
  
  
}


function draw() {
background("aqua");
monkey.x= camera.position.x-50
  
   bg.velocityX = -3 ;
  
    if (bg.x < 0){
      bg.x = bg.width/2;
    }


  
  stroke("white");
  textSize(20);
  fill("white")
  text("Score: "+ score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black")
  survivaltime=Math.ceil(frameCount/frameRate())
  text("SURVIVAL TIME:"+survivaltime, 100 ,50);
    
    
    
  
  if (keyDown("space")&& monkey.y >= 100){
    monkey.velocityY=-12;
    
  }
    monkey.velocityY = monkey.velocityY + 0.8;
    monkey.collide(invisibleGround);
  
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
    score=score+2;
    monkey.scale=monkey.scale+0.001;
  }
  
   if(obstacleGroup.isTouching(monkey)){
    obstacleGroup.scale=0.5;
    monkey.scale=monkey.scale-0.001;
    
    
   }
  
 
  
 banana();
obstacle();
   
  
drawSprites();
  
}
 function banana(){
   
 if (frameCount % 80=== 0) {
    var banana = createSprite(600,350,40,10);
    banana.y = Math.round(random(240,340));
 
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    banana.lifetime = 200;
    banana.depth = monkey.depth;
    banana.depth = monkey.depth + 1;
    
   
    bananaGroup.add(banana);
       
  }
   
   
   
   
 }







function obstacle(){
  
   if (frameCount % 300=== 0) { 
    var obstacle = createSprite(600,530,10,40);
    obstacle.lifetime=200;
 
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -5;
   
    
    
   
    obstacleGroup.add(obstacle);
       
  }
  
  
  
  
  
  
  
  
}





