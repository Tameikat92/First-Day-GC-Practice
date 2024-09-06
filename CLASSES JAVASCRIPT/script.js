
document.write("Classes")
class Car {

    //this refers to the prooperty of an object
constructor(makeParam,modelParam,yearParam){
    this.make = makeParam;
    this.model = modelParam;
    this.year = yearParam;
}
 getCarInfo(){
   console.log( `${this.year},${this.model},${this.make}`);
}
}


// "new" is preferencing that I want to make a new object based on class
const myCar = new Car("Toyota","Corolla","2020");
const myCar2 = new Car("Mercedes","Benz","2021");
const myCar3 = new Car("Tesla","Model X","2022");

myCar3.getCarInfo();

// let allCars =  [myCar,myCar2,myCar3]
// console.log(allCars)

let car1 = myCar
console.log(car1)