class Iron {
    constructor(x, y) {
      var options = {
        'density':4,
        'friction': 12,
        'restitution':0.2
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50
      this.height = 50;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      
  
      push();
      translate(pos.x, pos.y);
    
      fill('brown')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  