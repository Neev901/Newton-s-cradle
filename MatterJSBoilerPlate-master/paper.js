class paper{
  constructor(x,y) {
      var options = {
          'restitution':1,
          'friction':0,
          'density':1
      }
      this.diameter = 35;
      this.x=x;
      this.y=y;
      this.body = Bodies.circle(x, y, 35, options);
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      fill(rgb(255,20,147));
      circle(pos.x, pos.y, 35);
    }
    keyPressed(){
      if (keyCode===UP_ARROW) {
         Matter.Body.applyForce(this.body,this.body.position,{x:-10,y:-10})
      }
    }
}