
// 10. Postfix to Infix Conversion


function postfixToInfix(postfix) {
    const stack = [];
  
    for (let char of postfix) {
      if (/[a-zA-Z0-9]/.test(char)) {stack.push(char);
      } else {const operand1 = stack.pop();
        
        const operand2 = stack.pop();
        stack.push(`(${operand2}${char}${operand1})`);
      }
    }
  
    return stack.pop();
  }
  
  // Example
  const postfix = "AB+CD-*";
  console.log(postfixToInfix(postfix)); 
  