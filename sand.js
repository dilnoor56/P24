class Sand{
	constructor(x,y,r)
	{
		var options={
			'density':4,
			'restitution':0.2,
			'friction':5
		}
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
			//draw the ellipse here to display the rubber ball
            ellipseMode(CENTER)
			ellipse(0,0,this.r)
			pop()
	}

}