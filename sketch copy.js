const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var rand;
var thunderCreatedFrame = 0;
var thun, thun1, thun2, thun3, thun4;
var engine, world;
var balls = [];
var bruce;
var bruceWalk;
var Bruce;
function preload(){
    bruceWalk = loadAnimation("walking_8.png","walking_7.png","walking_6.png","walking_5.png","walking_4.png","walking_3.png","walking_2.png","walking_1.png")
    Bruce = createSprite(200,480,100,100);
    Bruce.addAnimation("edfe",bruceWalk);
    Bruce.scale=0.3;
    thun1 = loadImage("thunderbolt/1p.png");
    thun2 = loadImage("thunderbolt/2p.png");
    thun3 = loadImage("thunderbolt/3p.png");
    thun4 = loadImage("thunderbolt/4p.png");

}

function setup(){
    var canvas = createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;
    var max = 200
    for(var x = 0;x<max;x++){
    balls.push(new Drop(random(0, 600),random(0, 600)));
    }
    bruce = new Umbrella(200,450);
    
    
}

function draw(){
    Engine.update(engine);

    background(random(0,20));
    drawSprites();
    for (var i = 0; i < balls.length; i++) {
     
        balls[i].display();
        balls[i].updateY();
        
      }
      bruce.display();
      rand = Math.round(random(1,4));
      if(frameCount%80===0){
          thunderCreatedFrame=frameCount;
          thun = createSprite(random(10,370), random(10,30), 10, 10);
          switch(rand){
              case 1: thun.addImage(thun1);
              break;
              case 2: thun.addImage(thun2);
              break; 
              case 3: thun.addImage(thun3);
              break;
              case 4: thun.addImage(thun4);
              break;
              default: break;
          }
          thun.scale = random(0.3,0.5)
      }
  

}   

