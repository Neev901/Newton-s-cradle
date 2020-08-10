
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball_1= new paper(440, 350);
	ball_2= new paper(475, 350);
	ball_3= new paper(510, 350);
	ball_4= new paper(545, 350);
	ball_5= new paper(580, 350);

	roof=new ground(200,510,175,20);

	rope1= new rope(ball_1.body, ball_1.body.position.x, roof.body.position.x);
	rope2= new rope(ball_2.body, ball_2.body.position.x, roof.body.position.x);
	rope3= new rope(ball_3.body, ball_3.body.position.x, roof.body.position.x);
	rope4= new rope(ball_4.body, ball_4.body.position.x, roof.body.position.x);
	rope5= new rope(ball_5.body, ball_5.body.position.x, roof.body.position.x);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
	
	ball_1.display();
	ball_2.display();
	ball_3.display();
	ball_4.display();
	ball_5.display();
	roof.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	ball_1.keyPressed();

  drawSprites();
 
}



