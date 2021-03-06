class Ball{
  constructor(x, y,width,height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width,height, options);
      this.width=width;
      this.height= height;
 //     this.r = r;
    //  this.image = loadImage("sprites/base.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      ellipseMode(CENTER);
      ellipse(0, 0, this.width, this.height);
      pop();
    }
}