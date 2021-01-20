class dustbin{
    constructor(x,y,w,h){
        var options={
            isStatic:true,
            density:2,
            friction:1.5

        }
        this.body= Bodies.rectangle(x,y,w,h,options);
        this.image=loadImage("dustbingreen.png")
        World.add(world,this.body);
        this.width=w;
        this.height=h;

    }

    display(){
        push();
        Rotate()
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        fill(255,0,0);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}