document.write("Loops in JavaScript")

function sayHello(){
    console.log("Hello,Meek");
}
sayHello();

function greet(name,greeting){
    let temp = "Test";
    if (greeting=== undefined){
        greeting = "Hello";
    }
    console.log(greeting + " " + name);
}
//arguments gets sent to parameters
greet("Kevin", "Hello");
greet("Elvis ");

function squareNumber(number){
    return number * number;
}

let result = squareNumber(4);
console.log(result);

function add(a,b){
    return a + b;
}
let sum = add(8,9)
console.log(sum);

function multiplyAdd(x,y,z){
    let total = add(x,y);
     return total * z;

}

let total = multiplyAdd(4,2,2);
console.log(total);

function helloWorld(){
    console.log("Hello World");
}

helloWorld();

// aero function. these are used for basic things
const sayHello2 = () => { console.log("Hello World Aero function ") };

// calling the aero function
sayHello2()

// another example of an aero function
const doubleNumber = (number) => {
    return number * 2;
}
let answer = doubleNumber(5);
console.log(answer)

