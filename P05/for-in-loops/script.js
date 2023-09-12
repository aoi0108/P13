'use strict'
// Please don't delete the 'use strict' line above
function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Yay! Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.log("    actual: ", actual);
        console.log("  expected: ", expected);
        console.trace();
    }
}

//1
const hellos = {
    English: "Hello",
    Japanese: "Konnichiwa",
    German: "Hallo",
    Spanish: "Hola",
    Arabic: "Ahlan wa sahlan",
    Chinese: "Nihao",
    };

/**
 * @returns {undefined} この関数は色々な言語で"Hello" を表示するだけで、返り値は必要ありません。
 */

// ここにコードを書きましょう
function sayHellos(){
    for(let i in hellos){
        console.log(hellos[i]);
    }
}

// console.log の表示は、返り値ではないため、テストするのは困難です。
// 今回は、コンソールの表示を確認することで、テストとしてください。

sayHellos();
// "Hello"
// "Konnichiwa"
// "Hallo"
// "Hola"
// ...

//2
/**
 * @param {object} ???
 * @returns {Array<string>} 与えられたオブジェクトのすべてのキーが入った配列
 */

// ここにコードを書きましょう
function getKeys(object){
    let ans=[];
    for(let i in object){
        ans.push(i);
    }
    return ans;
}

const object1 = { a: 1, b: 2, c: "hello" };
const object2 = { 1: "a", 2: "b", hello: "c" };

test(getKeys(object1), ["a", "b", "c"]);
test(getKeys(object2), ["1", "2", "hello"]);

//3
/**
 * @param {object} ???
 * @returns {Array<any>} 与えられたオブジェクトのすべての値が入った配列
 */

// ここにコードを書きましょう
function getValues(object){
    let ans=[];
    for(let i in object){
        ans.push(object[i]);
    }
    return ans;
}

test(getValues(object1), [1, 2, "hello"]);
test(getValues(object2), ["a", "b", "c"]);

//4
const myObj = { foo: 1, bar: 2, key: 3, delta: 4, lee: 5 };
function printAll(object) {
  for (const key in object) {
    console.log(object[key]);//変数を使えるようブラケット記法に変更
  }
}
printAll(myObj);

//5
/**
 * @param {object} ??? - オブジェクト。ただし値はすべて異なるものとする。
 * @returns {object} 与えられたオブジェクトのキーと値を入れ替えた、新しいオブジェクト
 */

// ここにコードを書きましょう

const object3 = { a: 1, b: 2, c: 3, d: 4 };
const object4 = { 1: "a", 2: "b", 3: "c", 4: "d" };

function swapPairs(object){
    let ans={};
    for(const i in object){
        ans[object[i]]=i;
    }
    return ans;
}

test(swapPairs(object3), { 1: "a", 2: "b", 3: "c", 4: "d" });
test(swapPairs(object4), { a: "1", b: "2", c: "3", d: "4" });

//6
/**
 * @param {Array<object>} ??? - オブジェクトを要素に持つ配列
 * @returns {Array<any>} 与えられた配列の最初のオブジェクトの、すべての値(valueの方)が入った配列
 */

// ここにコードを書きましょう。
function getFirstObjectValues(object){
    let ans =[];
    for(const i in object[0]){
        ans.push(object[0][i]);
    }
    return ans;
}

const collection = [{ a: 1, b: 2 }, { a: 3, b: 3 }, { b: 4 }, { a: 100 }];
const collection2 = [{ a: 3, b: 3 }, { b: 4 }, { a: 100 }];

test(getFirstObjectValues(collection), [1, 2]);
test(getFirstObjectValues(collection2), [3, 3]);

//7
/**
 * @param {Array<object>} ???
 * @returns {Array<any>} 与えられた配列のすべてのオブジェクトの、すべての値(valueの方)が入った配列
 */

// ここにコードを書きましょう
function getAllValues(object){
    let ans =[];
    for(const i in object){
        for(const j in object[i]){
        ans.push(object[i][j]);
        }
    }
    return ans;
}

test(getAllValues(collection), [1, 2, 3, 3, 4, 100]);
test(getAllValues(collection2), [3, 3, 4, 100]);

//8
/**
 * @param {Array<object>} ???
 * @returns {Array<any>} 与えられた配列内のすべてのオブジェクトのすべての値が入った配列。重複した値がある場合は1つだけ残す。
 */

// ここにコードを書きましょう

const collection3 = [{ a: 1, b: 2, c:2 }, { d: 1, e: 3 }, { f: 4, g: 5 }];
const collection4 = [{ d: 1, e: 3 }, { f: 4, g:5 }];

function getAllValues2(object){
    let ans =[];
    for(const i in object){
        for(const j in object[i]){
        ans.push(object[i][j]);
        }
    }
    ans = Array.from(new Set(ans))
    return ans;
}

test(getAllValues2(collection3), [1, 2, 3, 4, 5]);
test(getAllValues2(collection4), [1, 3, 4, 5]);





