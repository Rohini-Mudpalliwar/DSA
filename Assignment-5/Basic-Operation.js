let stack= [];

function push(element){
    stack[stack.length]= element;
    }
   
push(10);
push(50);
push(60);
console.log(stack);

function pop(){
    const poppedElement = stack[stack.length-1];
    return poppedElement;

}
console.log(pop()); //poppedElement


function seek(){
    return stack[stack.length-1];
}
console.log()

function size(){
    return stack.length;
}


function isEmpty(){
    return stack.length === 0;
}
