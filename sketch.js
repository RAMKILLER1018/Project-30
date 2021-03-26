const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,220,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //stand2 blocks
  //level one
  bl1 = new Block(640,190,30,40);
  bl2 = new Block(670,190,30,40);
  bl3 = new Block(700,190,30,40);
  bl4 = new Block(730,190,30,40);
  bl5 = new Block(759,190,30,40);
    //level two
    bl6 = new Block(670,150,30,40);
    bl7 = new Block(700,150,30,40);
    bl8 = new Block(730,150,30,40);
    //top
    bl9 = new Block(700,110,30,40);

    polygon = new Polygon(150,200,40,40)

  slingshot=new Slingshot(polygon.body,{x:180,y:190})


}
function draw() {
  background(48,6,6); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display(); 
  block9.display(); 
  block10.display();  
  block11.display();  
  block12.display();  
  fill("turquoise");  
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

  fill("skyblue");
  bl1.display();
  bl2.display();
  bl3.display();
  bl4.display();
  bl5.display();

  fill("turquoise");
  bl6.display();
  bl7.display();
  bl8.display();
  
  fill("pink")
  bl9.display();
  
polygon.display();

slingshot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX , y:mouseY})
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if (keyCode === 32){
    Matter.Body.setPosition(polygon.body,{x:150, y:200})
    slingshot.attach(polygon.body)
  }
} 
