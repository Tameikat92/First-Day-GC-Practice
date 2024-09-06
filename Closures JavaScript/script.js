
document.write("Closures in JavaScript")

// returning a function to a function
// lexico environment is all the variables in a parent 
function outerFunction(){
    let outerVar = "I am from the outer function"

    return  function innerFunction(){
        console.log(outerVar);
    }

}

const result = outerFunction();
result()

