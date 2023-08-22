'use strict'
// Please don't delete the 'use strict' line above

// ファイル全体で使用する TDD 用の変数を宣言する
let expected;
let actual;

// 上の問題のように、関数testにチェックする内容を全てまとめる
function test(actualExpression, expectedExpression) {
    if (actualExpression === expectedExpression) {
        console.log("Yay! Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.log("    actual: ", actualExpression);
        console.log("  expected: ", expectedExpression);
    }
}

actual = /* テストを行う EXPRESSION（式）を定義する */
    expected = /* EXPRESSION（式）の期待値を定義する */

    // testを呼び出す
    test(actual, expected);

//1
/**
* 引数①: {string} ??? - テストの対象となる文字列
* 引数②: {number} ??? - 閾値
* 返り値： 与えられた文字列の長さが指定された閾値より長いかどうか
*/
// ここにコードを書きましょう

function isLongerThan(string, number) {
    if (typeof (string) == "string" && typeof (number) == "number") {
        if (string.length > number) {
            return true;
        } else {
            return false;
        }
    } else {
        return "Invalid input.";
    }
}

actual = isLongerThan("three", 3);
expected = true;

// testを呼び出す
test(actual, expected);

actual = isLongerThan("three", 5);
expected = false;

// testを呼び出す
test(actual, expected);

actual = isLongerThan(3, 5);
expected = "Invalid input.";

// testを呼び出す
test(actual, expected);

//2
/**
 * 引数: { number }??? - テストの対象となる数値
 * 返り値:  与えられた数値が奇数かどうかを表すブーリアン
 */
// ここにコードを書きましょう
function isOddWithoutIf(number) {
    return number % 2 == 1 && typeof (number) == "number";
}

actual = isOddWithoutIf(3);
expected = true;

// testを呼び出す
test(actual, expected);

actual = isOddWithoutIf(4);
expected = false;

// testを呼び出す
test(actual, expected);

actual = isOddWithoutIf("abc");
expected = false;

// testを呼び出す
test(actual, expected);

 //3
/**
 * 引数: ??? - 数値（0-10）。その名前がアルファベットの形で返ることになる
 * 返り値:  {"zero"|"one"|"two"|"three"|"four"|"five"|"six"|"seven"|"eight"|"nine"|"ten"} 与えられた数値をアルファベットで記した時の名前
 */
// ここにコードを書きましょう
function getSimpleNumberName(number){
    const eng_num=["zero","one","two","three","four","five","six","seven","eight","nine","ten"];
    return eng_num[number];
}

actual = getSimpleNumberName(0);
expected = "zero";

// testを呼び出す
 test(actual, expected);

// さらにテストを書いて、コードが正しいことを確認してください

actual = getSimpleNumberName(3);
expected = "three";

// testを呼び出す
 test(actual, expected);

 actual = getSimpleNumberName(5);
expected = "five";

// testを呼び出す
 test(actual, expected);

 //4
 /**
 * 引数:  ??? - 正多角形の辺の数 (3-8)
 * 返り値:  {"triangle"|"square"|"pentagon"|"hexagon"|"heptagon"|"octagon"} 与えられた数の辺を持つ凸多角形の英語名
 */
// ここにコードを書きましょう

function getRegularConvexPolygonName(side){
    const eng_polygon=["triangle","square","pentagon","hexagon","heptagon","octagon"];
    return eng_polygon[side-3];
}

actual = getRegularConvexPolygonName(3);
expected = "triangle";

// testを呼び出す
 test(actual, expected);

// さらにテストを書いて、コードが正しいことを確認してください

actual = getRegularConvexPolygonName(5);
expected = "pentagon";

// testを呼び出す
 test(actual, expected);

 actual = getRegularConvexPolygonName(8);
expected = "octagon";

// testを呼び出す
 test(actual, expected);

 //5-1
 function randomNumber(number){
    return Math.floor(Math.random() * number);
 }

 console.log(randomNumber(100));
 console.log(randomNumber(3));

 //5-2
function guessMyNumber(number){
    const random_num=Math.floor(Math.random() * 6);
    if(number==random_num){
        return "YES!";
    }else{
        return "NO!";
    }
}

console.log(guessMyNumber(0));
console.log(guessMyNumber(1));
console.log(guessMyNumber(2));
console.log(guessMyNumber(3));
console.log(guessMyNumber(4));
console.log(guessMyNumber(5));


