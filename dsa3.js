//PALINDROME
function palin(str){
    let j = str.length -1 //this j contains the ending element index 
    for(i=0; i<=str.length/2; i++)//i contains the index value till middle because j contains remaining index 
        {
        if(str[i] != str[j]) //compares the first element with last element(str[j]) and progress respectively
            {
            return false;
        }
        j--

    }
    return true;
}

const str1 = 'madam'
const str2 = 'malayalam'

console.log(palin(str1))
console.log(palin(str2))