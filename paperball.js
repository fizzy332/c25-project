class PaperBall{
    constructor(x,y,r){
        var options={
            restitution:0.3,
            friction:0.5,
            isStatic:false,
            density:0.1
        }
        this.body= Bodies.circle(x,y, r,options);
        this.image=loadImage("paper.png")
        this.width=width;
        this.height=height;
        this.r = r;

        World.add(world,this.body);

    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        fill(0,255,0);
        imageMode(RADIUS);
        image(this.image,0,0,this.r,this.r);
        pop();
    }

}