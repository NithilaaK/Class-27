class Chain {
    constructor(pointA, pointB) {
        var options = {
            bodyA: pointA,
            bodyB: pointB,
            stiffness: 0.04,
            length: 50
        }

        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display() {
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        
        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}