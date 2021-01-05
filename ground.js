class Ground
{
    constructor(x,y,w,h)
    {
    var features = 
  {
    isStatic : true
  }
  this.ground=Bodies.rectangle(x,y,w,h,features)
  World.add(myworld,this.ground)
  this.w=w
  this.h=h
  this.image=loadImage("ground.png")
}
display()
{   
    push ()
     imageMode(CENTER)
  image (this.image,this.ground.position.x,this.ground.position.y,this.w,this.h); 
  pop ()
  /* rectMode(CENTER)
  rect(this.ground.position.x,this.ground.position.y,this.w,this.h);  */
}
}