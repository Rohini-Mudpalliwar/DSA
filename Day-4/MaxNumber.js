// QUE- find the max numeber present in the array
const myArray = [33, 44, 56, 87, 43, 90, 104];

function findMaxNumber(myArray){
    let maxNumber = myArray[0];
    for( let i=1; i<myArray.length; i++){     //we can also start iteration from i=0, but that will be one usless iteration but it will still giv the same answer
        if(myArray[i] > maxNumber){
            maxNumber = myArray[i];
        }
    }
    return maxNumber;
}

console.log(findMaxNumber(myArray));







