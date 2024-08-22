document.write("Heating and Cooling")

let actualTemp = 70;
let desiredTemp = 75;

if (actualTemp === desiredTemp) {
console.log("Standby");
} else if (actualTemp > desiredTemp) {
console.log("Run AC");

} else if (actualTemp <  desiredTemp) {
    console.log("Run heat");
}

let tempCelsius = prompt("Enter Temperature");
let targetUnit = prompt("Enter C ,K, F");
console.log(tempCelsius)
console(tempCelsius)
 if (tempCelsius === "C") {
    console.log("Celsisus is fine")
 } else if (tempCelsius === "K") {
  console.log("Kelvin is getting high")
 }



