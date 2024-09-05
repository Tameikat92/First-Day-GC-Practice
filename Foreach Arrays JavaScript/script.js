document.write("Arrays and Foreach")

// const fruit = ["Apple","Cherry","Banana","Kiwi","Orange","Grapes","Mango"];

// fruit.forEach(
//     function(fruit,index,array){
//         console.log(`${fruit}, ${index}, ${array}`);
//     }
// )
// const fruits = ["Apple","Cherry","Banana","Kiwi","Orange","Grapes","Mango"];

// let removedFruits = fruits.splice(1,2); // what number to start and what number to remove

// fruits.forEach(
//     function(fruits){
//         console.log(fruits);
        
//     }
// )

let colors = ["Red","Blue","Green","Yellow"];

//colors.splice(1,1,"Purple","Cyan"); // appending. Start at number and delete 1 element
colors.splice(1,colors.length);

console.log(colors);

let numbers =[1,2,3,4,5,6,7,8,9,10];

let evenNumbers = numbers.filter(
    function(number){
        return number % 2 === 0;       
    }
);
console.log(evenNumbers)