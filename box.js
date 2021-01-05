class Box
{
    constructor(x,y,w,h)
    {
    var features = 
    {
      isStatic : false,
      restitution : 0.5,
      friction:0.8
    }
    this.Box=Bodies.rectangle(x,y,w,h,features)
    World.add(myworld,this.Box)
    this.w=w
    this.h=h
    this.image=loadImage("wood1.png")
}
display()
{   
    push  () 
    translate(this.Box.position.x,this.Box.position.y)
    rotate(this.Box.angle)
    imageMode(CENTER)
    image (this.image,0,0,this.w,this.h);
    pop ()
}
}