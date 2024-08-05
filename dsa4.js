//ANAGRAM
function Anagram(str1, str2) {
    // Convert strings to arrays of characters
    let arr1 = str1.split('');
    let arr2 = str2.split('');

    // Check if lengths are the same
    if (arr1.length !== arr2.length) //if length not equal it should not be anagram!
        return false;

    // Sort arrays
    arr1.sort();  //sorting in alphabetical order!
    arr2.sort();

    // Compare sorted arrays
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i])  
            return false;
    }
    return true;
}

let str1 = "triangle";
let str2 = "integral";


if (Anagram(str1, str2))// function call
    document.write("The two strings are anagrams of each other<br>");
else
    document.write("The two strings are not anagrams of each other<br>");