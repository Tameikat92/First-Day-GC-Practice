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

