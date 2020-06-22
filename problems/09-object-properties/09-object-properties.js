/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */

let person = {
    firstName: "Arlette",
    lastName: "Inserto"
}
function objectProperties(someObj) {
    for(const key in someObj){
        console.log(`${key}: ${someObj[key]}`)
    }
}

objectProperties(person)