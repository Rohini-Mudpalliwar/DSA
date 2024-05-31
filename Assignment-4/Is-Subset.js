function isSubset(arr1, arr2) {
    let set1 = new Set(arr1);

    for (let element of arr2) {
        if (!set1.has(element)) {
            return false; // If any element is not found the return arr2 is not a subset
        }
    }

    return true; // All elements are found then retuen arr2 is a subset
}



const arr1 = [11, 1, 13, 21, 3, 7];
      const arr2 = [11, 3, 7, 1];

if (isSubset(arr1, arr2)) {
    console.log("arr2[] is a subset of arr1[]");
} else {
    console.log("arr2[] is not a subset of arr1[]");
}
