class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0.3,
			friction:0,
			density:1.2
						
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(tis.x, this.y,(this.r-20)/2, options);
 		World.add(world, this.body);

		 this.image=loadImage("paper.png")

		 function keyPressed() {
				if(keyCode===UP_ARROW){
					Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:145})
				}
		
			}


	}
	display()
	{
			

	
			var groundPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill("grey")
			ellipse(0,0,this.r, this.r);
			
			
			pop()
			
	}



	

}