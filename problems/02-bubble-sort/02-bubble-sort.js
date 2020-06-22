// /* 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array. */

function swap(numArray, firstIndex, secondIndex){
    let temp = numArray[firstIndex]
    numArray[firstIndex] = numArray[secondIndex]
    numArray[secondIndex] = temp
}

function bubbleSort(numArray) {
    let arrayLength = numArray.length, 
        i, j, stop

    for (i=0; i < arrayLength; i++){
        for (j=0, stop = arrayLength-i; j<stop; j++){
            if(numArray[j] > numArray[j+1]){
                swap(numArray , j, j+1)
            }
        }
    }
    return numArray
}

console.log(bubbleSort([120,90,3,58,21,1,549,32,213,216]))