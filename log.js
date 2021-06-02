class Log {
    constructor(x, y, width, height,angle) {
      var options = {
          'restitution':0.3,
          'friction':2.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      Matter.Body.setAngle(this.body,angle);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this .body.angle;
    push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4)
      stroke("brown")
      fill("yellow");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  