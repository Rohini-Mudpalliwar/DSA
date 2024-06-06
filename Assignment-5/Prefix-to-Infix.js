function prefixToInfix(expression) {
    const stack = [];
    
    for (let i = expression.length - 1; i >= 0; i--) {
      const char = expression[i];
  
      if (/[a-zA-Z0-9]/.test(char)) {
        stack.push(char);
        console.log(`Pushed ${char} to stack: [${stack.join(', ')}]`);
      } else {
        const a = stack.pop();
        const b = stack.pop();


        
        const result = `(${a}${char}${b})`;
        stack.push(result);
        console.log(`Popped ${a} and ${b}, Pushed ${result} to stack: [${stack.join(', ')}]`);
      }
    }
  
    return stack.pop();
  }



  
  // Example usage:
  const prefix = "*+AB-CD";
  console.log(prefixToInfix(prefix)); 
  