class Paper { 
    constructor(x, y, r) {
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2,
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r, options);
        this.image = loadImage("Paper.png");
        World.add(world, this.body)
    }
     display(){
         var paperpos = this.body.position;
         var angle = this.body.angle;

         push();
         translate(paperpos.x, paperpos.y + 46);
         rotate(angle);
         imageMode(CENTER);
         image(this.image, 0, 0, this.r, this.r);
         pop();
     }
}