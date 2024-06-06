function infixToPostfix(expression) {
    const precedence = { '+': 1, '-': 1, '*': 2, '/': 2, '^': 3 };
    const stack = [];
    let result = '';
  
    for (let char of expression) {
      if (/[a-zA-Z0-9]/.test(char)) {
        result += char;
      } else if (char === '(') {
        stack.push(char);
      } else if (char === ')') {
        while (stack.length && stack[stack.length - 1] !== '(') {
          result += stack.pop();
          console.log(`Popped from stack to result: ${result}`);
        }
        stack.pop(); // remove '('
      } else {
        while (stack.length && precedence[char] <= precedence[stack[stack.length - 1]]) {
          result += stack.pop();
          console.log(`Popped from stack to result: ${result}`);
        }
        stack.push(char);
        console.log(`Pushed ${char} to stack: [${stack.join(', ')}]`);
      }
    }
  
    while (stack.length) {
      result += stack.pop();
      console.log(`Popped from stack to result: ${result}`);
    }
  
    return result;
  }
  
  // Example usage:
  const infix = "a+b*(c^d-e)^(f+g*h)-i";
  console.log("Final Result:", infixToPostfix(infix));   