'use strict'
// Please don't delete the 'use strict' line above
// ヒント： ここで何かする必要があるかもしれません


function counter() {
    // ここにあなたのコードを書いてください
    let count=0;
    return function (){
        count++;
        
  }
  
  counter(); // => 1
  counter(); // => 2
  counter(); // => 3
  // etc.

