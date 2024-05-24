function secondLargestElement(arr) {
  if (arr.length < 2) {
    return null;
  }

  let fir = -Infinity;
  let sec = -Infinity;

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] > fir) {
      sec = fir;
      fir = arr[i];

} else if (arr[i] > sec && arr[i] != fir) {
      sec = arr[i];
 }

  }

  return sec === -Infinity ? null : sec;
}

// Example
const arr = [12, 35, 1, 10, 39, 4];
console.log(secondLargestElement(arr));
