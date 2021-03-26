class Block{
  constructor(x, y, width, height) {
      var options = {
         
          restitution :0.4,
          density : 0.0004
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visibility = 255;
      World.add(world, this.body);
    }
    display(){

      var pos = this.body.position;
      var angle = this.body.angle;
      
  if(this.body.speed<3)
  {

      push();
  translate(pos.x,pos.y);
  rotate(angle);
  strokeWeight(2)
  stroke("black");

  rectMode(CENTER);
  rect(0,0,this.width,this.height);
  pop();
  
  }
   else{
    World.remove(world,this.body);

    push();
    this.Visibility = this.Visibility-5;
    tint(255,this.Visibility);
    pop();
  }
  }
  
  
  };