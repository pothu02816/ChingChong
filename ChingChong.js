class ChingChong{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.Cop = Constraint.create(options);
        World.add(world, this.Cop);
    }
    fly(){
        this.Cop.body=null
    }
    display(){
        if(this.Cop.body){

        
        var pointA = this.Cop.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}