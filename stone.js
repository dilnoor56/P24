class Stone {
    constructor(x, y) {
      var options = {
        'density':4,
        'friction': 12,
        'restitution':0.1
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 80;
      this.height = 100;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
    
  
      push();
      translate(pos.x, pos.y);
      fill(0)
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  