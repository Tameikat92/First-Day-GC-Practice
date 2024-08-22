document.write("Homework Practice")

let number = 10;
console.log("Assignment of number is: " + number);

number += 5; /* + symbol adds to variable. Can also use any operator and they will subtract,divide, and etc. */




console.log(number);

let isEqual = (5 === "5"); /* more explicit comparison*/

console.log(isEqual)

let isLessThan = (3<=7);
console.log(isLessThan)

let andResult = (5>9 || 8>6); /* one side has to be true to make the whole thing true */
console.log(andResult)

let andResultTwo = (5>9 || 8>6 || 5<10 ); /* No limit to how many or statements in an expression. One side has to be true to make the whole thing true */
console.log(andResultTwo)

let andResultThree = (5>9 || (8 > 4 &&  5 < 2 /* trat this and as one big expression . Its false */));
console.log(andResultThree)

let statementTrue = (5 != 2);
console.log("Is this statement true: " + statementTrue);


let num = 10;

if (num > 10 && num % 2 === 0) {
    console.log("this number is positive");
}

let numTwo = 11;

if (numTwo > 0 && numTwo % 2 === 0) {
    console.log("this number is positive" + numThree);
}

let numThree = 4;

if (numThree > 5 || numThree % 2 === 0) {

    if(numThree % 2 === 0){
    console.log("this number is positive" + numThree);
}
}

let numFour = -4;

if(numFour > 0) {
    console.log("this number is positive" + numFour)
} else if (numFour < 0){
    console.log("number is negative" + numFour)
} else {
    console.log("this number is 0")
}

