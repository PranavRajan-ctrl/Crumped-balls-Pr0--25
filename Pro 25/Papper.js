class Papper{
    constructor(x,y,r){
        var options={
            isStatic : false,
            residution:0.3,
            friction:0,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r
        this.image=loadImage("papper.png");
        this.body=Bodies.circle(this.x,this.y (this.r-20)/2, options)
        World.add(world, this.body);
    }
    display(){
        var papperpos=this.body.postion
        push()
        translate (papperpos.x , papperpos.y);
        rectMode(CENTRE);
        //strokeWeight(4);
        imageMode(CENTRE);
        image(this.image,0,0,this,r,this,this.r);
        //ellipse(0,0,this.r,this.r);
        pop();
    }
}