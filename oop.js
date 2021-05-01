class Car{
    // constructor(){
    //     this.name = "Long";
    //     this.color = "red";
    // }
    constructor(name,color){
        this.name=name;this.color=color;

    }
    present(){
        console.log("The Car's name is " + this.name + ", color is " + this.color);
    }
}
mycar = new Car("Man","black");
mycar.present();