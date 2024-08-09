//palindrome

function palincheck(number){
    if(number < 0){
        return false;
    }
    let original = number;
    let reversed = 0;

    for( let temp = original ; temp > 0 ; temp = Math.floor(temp/10) ){
        reversed = reversed * 10 + temp % 10;
    }
    return number === reversed;
}
console.log(palincheck(121));