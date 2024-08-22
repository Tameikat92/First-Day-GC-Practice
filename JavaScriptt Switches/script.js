document.write("javaScript Day 2 ")

let temperature = 15;

if (temperature >= 80){
    console.log("Its hot");
} else if (temperature >= 60){
    console.log("Its warm.");
} else if (temperature >= 40){
    console.log("its cold")
} else {
    console.log("Freezing")
};

/* switch statements are used to evaluate one line of code*/

/** cases are just possible values */
// the break exits the statement that is running. keeps from running subsequent cases
//default case, so some behavior will always happen
let days = 1;

switch(days) {
    // code to run here
    case 1:
        console.log("Monday");
        break;
    case 2:
    console.log("Tuesday")
    break;
    case 3:
        console.log("wednesday");
        break;
    case 3:
        console.log("Thursday");
            break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day of the week")
}
//syntax is : condition ? expressionTrue : expressionFalse

let number = 5;

let result =(number >0) ? "The number is positive": "The number is negative";
console.log(result)





