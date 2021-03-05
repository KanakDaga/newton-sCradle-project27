class Bob{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        // pos.x = mouseX;
        // pos.y = mouseY;
        push ();
        translate (pos.x,pos.y);
        rotate (this.body.angle);
        fill ("green");
        stroke ("yellow");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop ();
    }
}