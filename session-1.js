

// Problem 01: Reverse String
// hello
// let reverseString = (str) => {
    
//     // const strArr = str.split("");
//     // return strArr.reverse().join("")
//     // ////////////////////////////////////////////////////////////

//     // let revString= '';
//     // for(let i = str.length - 1; i>=0; i--) {
//     //     revString = revString + str[i];
//     // }

//     // let revString= '';
//     // for(let i = 0;  i <= str.length - 1; i++) {
//     //     revString = str[i] + revString;
//     // }
//     // return revString

//     // //////////////////////////////////////////////////////////

//     // let revString= '';
//     // for(let char of str) {
//     //     revString = char + revString;
//     // }
//     // return revString

//     /////////////////////////////////////////////////

//     // let revString= '';
//     // str.split('').forEach(char => revString = char + revString);
//     // return revString

//     //////////////////////////////////////////

//     return str.split('').reduce((revString, char) => char + revString, '');

// }
// console.log(reverseString("hello"));

//===============================================================


// Problem 02: VALIDATE A PALINDROME
// let isPalindrome = (str) => {
//     const revString = str.split('').reverse().join('');

//     return revString === str
// }
// console.log(isPalindrome("madam"))

//===============================================================

// Challenge 3 : Reverse an Integer
// let reverseInt = (int) => {

//     const revString = int.toString().split('').reverse().join('')

//     return parseInt(revString) * Math.sign(int)
// }
// console.log(reverseInt(-20))

//=============================================================

// Challenge 04: Capitalize Letters

//let capitalizeLetters = (str) => {
    // const strArr = str.toLowerCase().split(' ');
    // for(let i = 0; i < strArr.length; i++ ) {
    //     strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1)
    // }
    // return strArr.join(' ')

    //////////////////////////////////////////////////
    // return str.toLowerCase()
    // .split(' ')
    // .map( word => word[0].toUpperCase() + word.substr(1))
    // .join(' ')

    ////////////////////////////////////////////////
    // return str.replace(/\b[a-z]/gi, function(char) {
    //     return char.toUpperCase();
    // })
    
//}
//console.log(capitalizeLetters("i love javascript"))


// Challenges 5: Max Character

// let maxCharacter = (str) => {
//     const charMap = {};
//     let maxNum = 0;
//     let maxChar = '';

//     str.split('').forEach((char) => {
//         if(charMap[char]) {
//             charMap[char]++
//         } else {
//             charMap[char] = 1
//         }
//     });

//     for(let char in charMap) {
//         if(charMap[char] > maxNum) {
//             maxNum = charMap[char];
//             maxChar = char;
//         }
//     }
//     console.log(maxChar, ": ", maxNum)
//     return maxChar
// }

// maxCharacter("javascrippppt")


///////////////////////////////////////////////////////

// Challenge 6: FizzBuz

let fizBuz = () => {
    for(let i=1; i <= 100; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
        }
        else if( i % 3 === 0) {
            console.log("Fiz")
        } else if(i % 5 === 0) {
            console.log("Buzz")
        } 
        else {
            console.log(i)
        }
    }
}

fizBuz()