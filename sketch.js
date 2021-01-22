const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint

var boy_image,boy
var tree_image,tree
var stone1,sling,mango1,mamgo2,mango3,mango4,mango5

function preload(){
 boy_image=loadImage("sprites/boy.png")
 tree_image=loadImage("sprites/tree.png")
}

function setup(){
 var canvas=createCanvas(1000,700)
 
 engine = Engine.create();
 world = engine.world;

 stone1=new Stone(120,400,30)
 sling = new SlingShot(stone1.body,{x:120,y:440});

 
 boy=createSprite(200,500)
 boy.addImage(boy_image)
 boy.scale=0.125

 
 //tree=createSprite(720,420)
 //tree.addImage(tree_image)
 //tree.scale=0.450

 mango1=new Mango(800,300,30);
 mango2=new Mango(700,350,30);
 mango3=new Mango(720,240,30);
 mango4=new Mango(620,300,30);
 mango5=new Mango(640,240,30)
 
 
 Engine.run(engine)

}
function draw(){
  
 background("grey")

  Engine.update(engine);
  stone1.display();
  sling.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
 

  

  detectollison(stone1,mango1)
  detectollison(stone1,mango2)
  detectollison(stone1,mango3)
  detectollison(stone1,mango4)
  detectollison(stone1,mango5)
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  sling.fly();
}



function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone1.body,{x:120,y:400})
    launcherObject.attach(stone1.body)

  }
}
function detectollison(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x , mangoBodyPosition.y)

  if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false)
  }
  


}