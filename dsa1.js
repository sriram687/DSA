//SORT
//checking array whether it is sorted or not
function checkSorted(arr) {
    return arr.every((value, index, array) =>       //arr1:
        index === 0 || value >= array[index - 1]); //Index 0: 32 (no previous element, so it passes).
                                                    //Index 1: 39 (39 >= 32, so it passes).
                                                    //Index 2: 48 (48 >= 39, so it passes).
                                                    //Index 3: 56 (56 >= 48, so it passes).
}
    
// Example usage
const arr1 = [32, 39, 48, 56];                      //arr2:
const arr2 = [22, 65, 1, 39];                       //Index 0:22 (no previous element , so it passes)
                                                    //Index 1:65 (65>=22,so it passes)
console.log(checkSorted(arr1));                     //Index 2:1 (1 < 65 ,so it fails)
console.log(checkSorted(arr2));                     //so the condition 1:index ===0 also false and the condition two also false so array is not in ascending order    