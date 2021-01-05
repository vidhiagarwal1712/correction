class Pig
{
constructor(x,y,r)
{
    var features = {
    restitution:0.5,
     friction :0.8 
    }
    this.pig=Bodies.circle(x,y,r/2,features)
    World.add(myworld,this.pig)
    this.r=r
    this.image=loadImage("enemy.png")
}  
display(){
    push ()
    translate(this.pig.position.x,this.pig.position.y)
    rotate (this.pig.angle)
    imageMode(CENTER)
    image(this.image,0,0,50,50)
    pop ()
}


}