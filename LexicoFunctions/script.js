

let glaobalVar="Im global"; //global lexico environment

function outerFunction(){
    let outerVar = "Im outer" // functions lexical environment

    function innerFunction(){
        let innerVar = "I'm inner and I am a winner"; //innerFunctions lexcial environment
        console.log(glaobalVar)
        console.log(innerVar)
        console.log(outerVar)
    }
    innerFunction()
}
outerFunction();