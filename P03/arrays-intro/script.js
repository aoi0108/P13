'use strict'
// Please don't delete the 'use strict' line above

//1
/**
 * 引数：arrayOfPeople - 人の名前の配列
 * 返り値： 与えられた配列の長さ
 */
function numberOfPeople(arrayOfPeople) {
    return arrayOfPeople.length;
}

// テスト
console.log(numberOfPeople(["Alex", "Beau", "Carlos", "Dustin"])); // => 4

//2
// ここに,配列studentsを作成するコードを書きましょう.
const students=["tanaka","sato","takeda","ito","suzuki"];


// テスト
console.log(numberOfPeople(students)); // => 5

//3
// ここにコードを書きましょう.
students.push("takahashi");
students.push("abe");
students.push("yamada");

 // テスト
 console.log(numberOfPeople(students)); // => 8

 //4
 /**
 * 引数： array - 配列
 * 返り値： 与えられた配列の最後の要素を返す
 */
function last(array) {
    // ここにコードを書きましょう
    return array[array.length-1];
  }
  
  // ここにテストを書いてください
  // console.logを使って出力してOK. 意図した答えかを確認しよう
  console.log(last(students));
