
// 9. Postfix to Prefix Conversion

function postfixToPrefix(postfix) {
    const stack = [];
  
    for (let char of postfix) { if (/[a-zA-Z0-9]/.test(char)) {
        stack.push(char);
      } else {
        const operand1 = stack.pop();

        const operand2 = stack.pop();
 stack.push(char + operand2 + operand1);
      }
    }
  
    return stack.pop();
  }
  



  const postfix = "AB+CD-*";
  console.log(postfixToPrefix(postfix)); 
  