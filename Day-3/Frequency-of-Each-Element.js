function frequencyOfEachElement(arr) {
    const frequency = {};  //we iniciallized an empty object where key will be the elemnts and value will be no. of times that element is present in the array

    // Traversal
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (frequency[element]) { //if  exist the increse its present value bt 1
            frequency[element]++;    
        } else {
            frequency[element] = 1; //not exist then add element, inicialixe its value by 1
        }
    }

    return frequency;
}


const array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
console.log(frequencyOfEachElement(array)); 
