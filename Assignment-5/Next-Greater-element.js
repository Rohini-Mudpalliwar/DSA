function sorting(stack) {
  if (stack.length !== 0) {
    let temp = stack.pop();
    console.log(`Popped element ${temp}: [${stack.join(', ')}]`);
    sorting(stack);
    insertingBack(stack, temp);
  }
}

function insertingBack(stack, element) {
  if (stack.length === 0 || element > stack[stack.length - 1]) {
    stack.push(element);
    return;
  }

  let temp = stack.pop();
  insertingBack(stack, element);
  stack.push(temp);
  console.log(`Pushed element...... ${temp} back into stack: [${stack.join(', ')}]`);
}

// Example usage:
const stack = [34, 3, 31, 98, 92, 23];
sorting(stack);
console.log(stack); // Expected output: [3, 23, 31, 34, 92, 98]