
function MissingNumber(arr) {
    const finalLength = arr.length + 1;
    let totalSum = (finalLength * (finalLength + 1)) / 2;
let arraySum = 0;

    for (let i = 0; i < arr.length; i++) 
        {
             arraySum += arr[i];
    }

      return totalSum - arraySum;
}

// Example 
const arr = [1, 2, 4, 6, 3, 7, 8];
console.log(MissingNumber(arr)); 
