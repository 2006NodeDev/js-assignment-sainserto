/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */

function isPalindrome(str) {
    let regex = /[^A-Za-z0-9]/g;
    let lowRegStr = str.toLowerCase().replace(regex, '')
    let reverseStr = lowRegStr.split('').reverse().join('')
    return reverseStr === lowRegStr
}

console.log(isPalindrome("not a palindrome")) //false

console.log(isPalindrome("racecar")) //true

console.log(isPalindrome("race car")) //true

console.log(isPalindrome("1 2 3 2 1")) //true

console.log(isPalindrome("1 2 3 4 2 1")) //false

console.log(isPalindrome("AHA aha.")) //true