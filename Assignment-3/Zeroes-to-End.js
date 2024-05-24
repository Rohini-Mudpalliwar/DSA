function zerosToEnd(arr) {
    let index = 0; 

    //eleement traversal
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[index] = arr[i];
            index++;
        }
    }

    //remaining positions ocupied by zeroes
    for (let i = index; i < arr.length; i++) {
        arr[i] = 0;
    }

    return arr;
}


// Example 
const arr = [0, 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];
console.log(zerosToEnd(arr));
