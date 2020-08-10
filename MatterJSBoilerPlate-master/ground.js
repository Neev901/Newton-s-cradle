class ground{
  constructor(x, y, width, height){
    var options = {
       isStatic:true,
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
  }
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.y = y;
  this.x = x;
  this.width = width;
  this.height = height;
  World.add(world, this.body);
  }
  display(){
    push();
    translate(0, 0);
    rectMode(CENTER);
    rect( this.y,this.x, this.width, this.height);
    pop();
  }
}

