class rope{
  constructor(body1, offsetX, offsetY){
    this.offsetX=offsetX;
    this.offsetY=offsetY
    var options={
      bodyA: body1,
      //bodyB: body2,
      pointB:{x:this.offsetX, y:this.offsetY},
      stiffness: 0.1,
      length:150
    }
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
  }
    display(){
      var pointA = this.rope.bodyA.position;
      //var pointB = this.pointB;
      push(); 
      stroke(255,255,255)
      strokeWeight(5) 
      line(pointA.x, pointA.y, this.offsetX, this.offsetY);
      pop(); 
    }
  }
//body2