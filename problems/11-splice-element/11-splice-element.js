/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/

const letters = ['a', 'b', 'c', 'd']
function spliceElement(someArr, index) {
  return someArr.splice(index, 1)
}

spliceElement(letters, 2) //removes c
console.log(letters) //['a', 'b', 'd']

spliceElement(letters, 2) //removes d
console.log(letters) //['a', 'b']

spliceElement(letters, 1); //removes b
console.log(letters); //['a']