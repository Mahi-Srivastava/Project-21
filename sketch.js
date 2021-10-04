
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground,leftside,rightside
function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball = Bodies.circle(260,100,20,{isStatic:false,restitution:0.3,friction:0,density:1.2})
	World.add(world,ball)

	//creating a physic engine for ground leftside & rightside
	ground = Bodies.rectangle(width/2,670,width,20,{isStatic:true})
	World.add(world,ground)
	
	leftside = Bodies.rectangle(1100,600,20,120,{isStatic:true})
	World.add(world,leftside)
	
	rightside = Bodies.rectangle(1350,600,20,120,{isStatic:true})
	World.add(world,rightside)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20)
  rect(ground.position.x,ground.position.y,width,20)
  ellipse(leftside.position.x,leftside.position.y,20,120)
  ellipse(rightside.position.x,rightside.position.y,20,120)
  drawSprites();
 
}
function keyPressed(){
	if(keyCode == UP_ARROW){
    Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
	
}


