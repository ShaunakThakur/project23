var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var landingPad1, landingPad2, landingPad3, landingPad1Body, landingPad2Body, landingPad3Body;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	helicopterIMG = loadImage("helicopter.png");
	packageIMG = loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite = createSprite(width/2,80);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.2;

	helicopterSprite = createSprite(width/2,200);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale = 0.6;

	groundSprite = createSprite(width/2,height-5,width,10);
	groundSprite.shapeColor = "brown";

	landingPad1 = createSprite(width/2,height-20,200,20);
	landingPad1.shapeColor = "red";
	
	landingPad2 = createSprite(500,640,20,100);
	landingPad2.shapeColor = "red";

	landingPad3 = createSprite(300,640,20,100);
	landingPad3.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2,200,5,{restitution:0.6,isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2,680,width,10,{isStatic:true});
	World.add(world, ground);

	landingPad1Body = Bodies.rectangle(width/2,height-30,200,20,{isStatic:true});
	World.add(world,landingPad1Body);

	landingPad2Body = Bodies.rectangle(500,640,20,100,{isStatic:true});
	World.add(world,landingPad2Body);

	landingPad3Body = Bodies.rectangle(300,640,20,100,{isStatic:true});
	World.add(world,landingPad3Body);

	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background("cyan");

    packageSprite.x = packageBody.position.x 
	packageSprite.y = packageBody.position.y
	
	landingPad1.x = landingPad1Body.position.x;
	landingPad2.x = landingPad2Body.position.x;
	landingPad3.x = landingPad3Body.position.x;

	keyPressed();

	drawSprites();
}

function keyPressed() {
 if (keyDown("down_arrow")) {
	Matter.Body.setStatic(packageBody,false);

	helicopterSprite.velocityX = 20;
	helicopterSprite.lifetime = 50;
  }
}