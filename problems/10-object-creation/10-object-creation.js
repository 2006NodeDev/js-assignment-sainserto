/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

//object literal

let student = {
    name: "Ryan Gold",
    age: 33,
    address: "New York",
    phoneNumber: "1234567900"
}

console.log(student)

//constructor function

function Pet(name, age, species, gender, owner){
    this.name = name
    this.age = age
    this.species = species
    this.gender = gender
    this.owner = owner
}

let ryanPet = new Pet("Mooryang", 5, "cat", "female", "Ryan")
console.log(ryanPet)


//class

class Patient {
    name
    attendingPhysician
    roomNumber

    constructor(name, attendingPhysician, roomNumber){
        this.name = name
        this.attendingPhysician = attendingPhysician
        this.roomNumber = roomNumber
    }
}

let daum = new Patient("Daum", "Mo Taegu", "405")
console.log(daum)

