function revArray(array){

    const revArray = [];
    let len = array.length;
    console.log(len);

    
    for( let i=len-1 ; i>=0 ; i--){
        revArray.push(array[i]);
    }
    return revArray;
    
}
const array = [21, 22, 24, 28, 30];
const revNumber = revArray(array);
console.log(revNumber);