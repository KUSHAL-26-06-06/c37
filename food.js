class Food{
    constructor(foodStock,lastFed)

    display(){
        var x=80,y=100;

        ImageMode(CENTER);
        image(this.image,720,220,70,70);

        if(this.foodStock!=0){
            for(var i=0,i<this.foodStock,i++S){

                if(i%10==0){
                    x=80;
                    y=5+50
                }
                image(this.image,x,y,50,50);
                x=x+30;
            }

        }
    }
}