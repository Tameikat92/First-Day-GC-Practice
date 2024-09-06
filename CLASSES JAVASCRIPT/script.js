
document.write("Classes")
class Car {

    //this refers to the prooperty of an object
constructor(makeParam,modelParam,yearParam){
    this.make = makeParam;
    this.model = modelParam;
    this.year = yearParam;
}

}
// new is preferencing that I want to make a new object based on class
const myCar = new Car("Toyota","Corolla","2020");