/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */

function reverseStr(someStr){
    let reversedString = ""
    for (i = someStr.length - 1; i >= 0; i--) {    
        reversedString += someStr[i]
    }
    return reversedString
}

console.log(reverseStr("hello"))
console.log(reverseStr("I am legend"))

