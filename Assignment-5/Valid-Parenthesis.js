function validParenthesis(string){
    let stack = []; //empty stack inicialy
    const pairs = {'(':')','{':'}','[':']'};  //key and its values for checking purpose

    for(let char of string){
        console.log('for-of',char);

        if(char in pairs){//char means (,),[,],{,} and "in" means key ka char not value
            console.log(char);
             stack.push(char);
        } else if (stack.length === 0 || pairs[stack.pop()] !== char)  {
    
            return false;
        }
                                   
    }
    return stack.length === 0;
}
console.log("isValid-",validParenthesis("){}[]"));


