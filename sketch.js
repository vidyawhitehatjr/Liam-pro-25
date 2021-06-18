
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperObject;






function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
    paperObject=new paper(100,200);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paperObject.display();

  
    
//you do not need to separately call the keyPressed function as it as a predfined function Liam. 
//check this code and your older one keeping them side by side. 
 // keyPressed();

}

function keyPressed(){
if (keyCode === UP_ARROW){
	
	
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:150,y:-145});
}
}