
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground;
var paperBall, dustbin_bottom,dustbin_right,dustbin_left;
var count;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground =new Ground(width/2,height-10,width,50);
	
	dustbin1=new dustbin(570,420,150,150)
	
	paperBall= new PaperBall(100,200,20);

	//console.log(dustbin_right);
    

	
	
  
}


function draw() {
  
  background(450);
  text("press up arrow to throw the ball in bin",100,50);
  Engine.update(engine);
  ground.display();
 
  dustbin1.display();
 
  paperBall.display();
  
  
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		
		Matter.Body.applyForce(paperBall.body, paperBall.body.position,{x:3,y:-10});
	
		
	}
}



