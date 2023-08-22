'use strict'
// Please don't delete the 'use strict' line above

function isEven(number){
    if(typeof number== "number"){
        return number%2==0;
    }else{
        return "This is not a number.";
    }
//    return number%2==0;
}

console.log(isEven(4)); // => true
console.log(isEven(7)); // => false
console.log(isEven("abc")); // => "This is not a number."

