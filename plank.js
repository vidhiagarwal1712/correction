class Plank
{
    constructor(x,y,w,h,a)
    {
    var features = 
    {
      isStatic : false,
      restitution : 0.5,
      friction: 0.8
    }
    this.plank=Bodies.rectangle(x,y,w,h,features)
    Matter.Body.setAngle(this.plank,a)
    World.add(myworld,this.plank)
    this.w=w
    this.h=h
    this.image=loadImage("wood2.png")
    
}
display()
{   
    push  () 
    translate(this.plank.position.x,this.plank.position.y)
    rotate(this.plank.angle)
    imageMode(CENTER)
    image(this.image,0,0,this.w,this.h);
    pop ()
}
}