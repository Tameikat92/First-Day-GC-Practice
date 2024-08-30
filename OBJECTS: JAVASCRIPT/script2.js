document.write("Array of Objects")

//array with 3 objects in it 
const students = [
    {
        name: "Alice",
        age: 20,
        major: "Computer Science"

    },
    {
        name: "Micah",
        age: 25,
        major: "Mathematics"
    },

    {
        name: "Bob",
        age: "21",
        major: "Physics"
    }
    
];
const student = students[0]
console.log(students[0].age)