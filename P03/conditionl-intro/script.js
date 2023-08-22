'use strict'
// Please don't delete the 'use strict' line above

//1
function simplePasswordLock(password) {
    if (password == "password") {
      return "Correct! Welcome.";
    }else{
    return "Incorrect password, please try again.";
    }
  }

  console.log(simplePasswordLock("qwerty")); // => "Incorrect password, please try again."
console.log(simplePasswordLock("password")); // => "Correct! Welcome."

//2
console.log("Hello".length);
console.log("The length of this string is 31".length);
console.log(" spaces! ".length);


//3
function isItTooLong(str){
    if(str.length>10){
        return true;
    }else{
        return false;
    }
}

console.log(isItTooLong("abcdefghijk"));//11
console.log(isItTooLong("abcdefghij"));//10
console.log(isItTooLong("abc"));//3

//4
function biggerNumber(numOne, numTwo) {
    if(numOne>numTwo){
        return "The first argument is bigger.";
    }else if(numOne<numTwo){
        return "The second argument is bigger.";
    }else{
        return "The first argument and The second argument are equal."
    }
}

console.log(biggerNumber(4, 3)); // 'The first argument is bigger.' ‚ð•\Ž¦
console.log(biggerNumber(3, 4)); // => 'The second argument is bigger.'
console.log(biggerNumber(4, 4));

//5
function greeting(name,language){
    if(language=="Japanese"){
        return "Konnichiwa,"+name;
    }else if(language=="English"){
        return "Hello,"+name;
    }
}

console.log(greeting("Harry Potter", "Japanese")); // "Konnichiwa, Harry Potter!" ‚ª•\Ž¦‚³‚ê‚é‚æ‚¤‚É‚·‚éB
console.log(greeting("Harry Potter", "English")); // => "Hello, Harry Potter!"


