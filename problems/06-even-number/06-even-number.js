/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */

function isEven(num) {
  if (num === 0){
      return true
  } else if (num === 1){
      return false
  }
  else if (num < 0){
      return isEven(-num)
  }
  else if (isNaN(num)){
      return "not a number"
  }
  else{
      return isEven(num-2)
  }   
}

console.log(isEven(0)) //true
console.log(isEven(1)) //false
console.log(isEven(20)) //true
console.log(isEven(27)) //false
console.log(isEven(-5)) //false
console.log(isEven(-6)) //true 
console.log(isEven("thirty")) //"not a number"

