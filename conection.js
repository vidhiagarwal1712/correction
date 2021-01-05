class Conection 
{
    constructor(a,b)
{  console.log("hi")
    var op={
        bodyA:a,
        bodyB:b,
        stiffness:0.04,
        length: 10
     
    }
    this.con=Constraint.create(op)
    World.add(myworld,this.con)
    

}
display()
    {

    }

}