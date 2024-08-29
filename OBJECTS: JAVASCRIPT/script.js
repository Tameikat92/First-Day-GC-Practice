document.write("Objects")

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021,
    color: "Blue",

    start: function() {
          console.log("Rev up the engine!!!");
    }

};

car.color = "red"; // can change properties of values to make them more dynamic

console.log(car.makemake);
console.log(car.model);
console.log(car.year);
console.log(car.color);

car.start();