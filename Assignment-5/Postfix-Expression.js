function evaluatePostfix(expression) {
    const stack = [];
    for (let char of expression) {
      if (!isNaN(char)) {
        stack.push(Number(char));
        console.log(`Pushed ${char} to stack: [${stack.join(', ')}]`);
      } else {
        const b = stack.pop();
        const a = stack.pop();
        let result;
        switch (char) {
          case '+':
                     result = a + b;
            break;
          case '-':
            result = a - b;
             break;
               case '*':
            result = a * b;
            break;
          case '/':
            result = a / b;
            break;
        }
        stack.push(result);
        console.log(`Applied operator ${char}: Pushed result ${result} to stack: [${stack.join(', ')}]`);
      }
    }
    return stack.pop();
  }
  
  // Example
  console.log(evaluatePostfix("231*+9-")); 
  