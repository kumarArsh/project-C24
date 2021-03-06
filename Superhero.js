class Superhero {
    constructor(x, y, width, height) {
      var options = {
          isStatic:false,
          restitution:0,
          friction:1,
          density:1.2,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.height = loadImage("image/superhero-0.1.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(this.body.postion.x,this.body.position.y);
      imagemod(CENTER);
      image(this.image,0,0,this.width,this.height)
      pop();
    }
  }