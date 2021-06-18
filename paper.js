class paper
  {
    constructor(x,y)
    {
      var options={
        isStatic:false,
              restitution:0.3,
              friction:0,
              density:1.2
          
          
              }
      
          
          this.body = Bodies.circle(x, y, 30, options);
        this.radius=30;
        this.image=loadImage("paper.png");
     World.add(world, this.body);
          
    }
    display(){
          var pos =this.body.position;
          var angle = this.body.angle;
          push();
          translate(pos.x, pos.y);
          rectMode(CENTER)
          //ellipseMode(RADIUS);
          imageMode(CENTER);
          image(this.image,0,0,30,30);
          pop();
        }	
      
      
     
  
  }