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
// students[0].age;
// const student = students[1];
//console.log(students[1].age)

for (let i = 0; i < students.length; i++){
    const student = students[i];
    console.log(student.age);
}

const person = {
    firstName: "John",
    lastName: "Doe",
    age:34,
    hobbies: ["reading","cycling","cooking"],

    address: {
        street: "123 Main Street",
        city: "Night City",
        zip: 12345
    },

    fullName: function(){
        console.log(this.firstName);
        return this.firstName + " " + this.lastName;
    }
}

const person2 = {
    firstName: "Amerie",
    lastName: "Washingtom",
    age:34,
    hobbies: ["reading","cycling","cooking"],

    address: {
        street: "123 Main Street",
        city: "Night City",
        zip: 12345
    },

    fullName: function(){
        console.log(this.firstName2);
       // return this.firstName + " " + this.lastName;
    }
}

console.log(person.fullName());