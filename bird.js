class Bird
{
    constructor(x,y,w,h)
    {
   var features = {
     isStactic:false,
     restitution:0.5,
     friction:0.8
 }
 this.bird=Bodies.rectangle(x,y,w,h,features)
 World.add(myworld,this.bird)
 this.w=w
 this.h=h
 this.image=loadImage("bird.png")
}
display()
{  
   this.bird.position.x= mouseX
   this.bird.position.y= mouseY
    push  () 
    translate(this.bird.position.x,this.bird.position.y)
    rotate(this.bird.angle)
    imageMode(CENTER)
    image (this.image,0,0,this.w,this.h);
    pop ()
}
}