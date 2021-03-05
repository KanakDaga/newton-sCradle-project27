
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  bob1 = new Bob(400,500,30);
    bob2 = new Bob(340,500,30);
  	bob3 = new Bob(460,500,30);
    bob4 = new Bob(280,500,30);
	  bob5 = new Bob(520,500,30);

	rope1 = new Rope(bob1.body,{x:400,y:150});
  rope2 = new Rope(bob2.body,{x:340,y:150});
  rope3 = new Rope(bob3.body,{x:460,y:150});
  rope4 = new Rope(bob4.body,{x:280,y:150});
  rope5 = new Rope(bob5.body,{x:520,y:150});

	roof = createSprite(400,150,350,30);
	roof.shapeColor = "orange";


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}
// function mouseDragged(){
//   // Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});
//   // Matter.Body.setPosition(bob2.body,{x:mouseX,y:mouseY});
//   // Matter.Body.setPosition(bob3.body,{x:mouseX,y:mouseY});
//   Matter.Body.setPosition(bob4.body,{x:mouseX,y:mouseY});
//   // Matter.Body.setPosition(bob5.body,{x:mouseX,y:mouseY});
// }
// function mouseReleased(){
//   Matter.Body.applyForce(bob4.body,bob4.body.position,{x:-300,y:100});
// }

function keyPressed(){
  if(keyCode === LEFT_ARROW ){
     Body.applyForce(bob4.body, bob4.body.position,{x:-200,y:150});
  }
}




