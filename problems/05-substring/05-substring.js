/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */

const err = new Error
function substring(someStr, startIndex, endIndex) {
    if(typeof someStr === 'string' && typeof startIndex === 'number' && typeof endIndex === 'number'){
        return someStr.substring(startIndex, endIndex) 
    }else{
        throw new Error('Input is incorrect.')
    }
}

try {
    console.log(substring("Hello World", 1, 4)) // output shoud be "ell"
    console.log(substring(1, 8, 9)) // Error: Input is incorrect
    console.log(substring("hello", "hel", 9)) //Error: input is incorrect
    
} catch (err) {
    console.log(err);
}
