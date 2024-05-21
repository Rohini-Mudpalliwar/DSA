function palindrome(str){
 
    let reverse = "";
    
    for (let i=str.length-1; i>=0; i--){
    
        reverse = reverse + str[i];
    }
    if(reverse == str){
         return true;
         }else{
        return false;
        }
    }
    const str = palindrome("wow");

    
    console.log("given string is pallindrome?", (str));