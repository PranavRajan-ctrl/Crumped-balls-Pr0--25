class Papper{
    constructor(x,y,width,hieght){
        var options={
            isStatic : false,
            residution:0.3,
            friction:0.5,
            density:1.2
        }
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(this.image, 0, 0, this.width, this.height);
        pop();
    }
}