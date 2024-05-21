let rows = 8;
let pattern ="";

    for(let i=1; i<=rows; i++ ){   
        for(let n=1; n<=i;n++ ){
          pattern += "*"
        }

    
        pattern += "\n"
    }
console.log(pattern);