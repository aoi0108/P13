'use strict'
// Please don't delete the 'use strict' line above

let actual;
let expected;

function test(actual, expected) {
    if (actual === expected) {
        console.log("Yay! Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.log("  expected:", expected);
        console.log("    actual:", actual);
    }
}

//1
/**
 * @param {Array<number>} ??? - 数値型の要素を持つ配列
 * @returns {number} 与えられた配列のすべての数字の合計
 */

function sumArray(arr) {
    // ここにコードを書きましょう。
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

actual = sumArray([1, 2, 3, 4]);
expected = 10;

if (actual === expected) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

// さらにテストを書きましょう。
test(sumArray([1, 0, 0]), 1);
test(sumArray([1, 10, 100]), 111);

//2
/**
 * @param {Array<number>} ??? - 数値型の要素を持つ配列
 * @returns {number} 与えられた配列のすべての数字をかけあわせた答え
 */

function productArray(arr) {
    // ここにコードを書きましょう。
    let ans = 1;
    for (let i = 0; i < arr.length; i++) {
        ans *= arr[i];
    }
    return ans;
}

actual = productArray([1, 2, 3, 4]);
expected = 24;

if (actual === expected) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

// さらにテストを書きましょう。
test(productArray([1, 0, 0]), 0);
test(productArray([1, 10, 100]), 1000);

//3
/**
* @param {Array<any>} ???
* @returns {boolean} 与えられた配列に "fun" という文字列が入っているかどうかを表すブーリアン
*/

function hasFun(arr) {
    // ここにコードを書きましょう。
    let check = false;
    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) == "string") {
            if (arr[i].includes("fun")) {
                check = true;
            }
        }
    }
    return check;
}

actual = hasFun(["whatever", 2, false, "fun", "hello"]);
expected = true;

if (actual === expected) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = hasFun(["whatever", 2, false, "run", "hello"]);
expected = false;

if (actual === expected) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

// さらにテストを書きましょう。
test(hasFun([1, 2, 3, 4, 5]), false);
test(hasFun([1, 2, "funa", 4, 5]), true);

//4
/**
* @param {Array<any>} ???
* @returns {boolean} 与えられた配列の要素がすべてブーリアンかどうかを表すブーリアン
*/

function containsOnlyBooleans(arr) {
    // ここにコードを書きましょう。
    let check = false;
    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) != "boolean") {
            check = false;
            break;
        } else if (i == arr.length - 1) {
            check = true;
        }
    }
    return check;
}

actual = containsOnlyBooleans([true, false, true, false, false]);
expected = true;

if (actual === expected) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = containsOnlyBooleans([true, true, true, "not a boolean"]);
expected = false;

if (actual === expected) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

// さらにテストを書きましょう。
test(containsOnlyBooleans([]), false);
test(containsOnlyBooleans(["true", "false"]), false);

//5
/**
 * @param {Array<any>} ??? - 1番目の配列
 * @param {Array<any>} ??? - 2番目の配列
 * @returns {Array<any>} 与えられた2つの配列を連結させた配列
 */

function concatenate(arr1, arr2) {
    // ここにコードを書きましょう。
    let ans = arr1;
    for (let i = 0; i < arr2.length; i++) {
        ans.push(arr2[i]);
    }
    return ans;
}

actual = concatenate(["eeny", "meeny"], ["miny", "moe"]);
expected = ["eeny", "meeny", "miny", "moe"];

// 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

// さらにテストを書きましょう。

actual = concatenate([1], [2]);
expected = [1, 2];

// 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = concatenate(["a", "b"], []);
expected = ["a", "b"];

// 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

//6
/**
* @param {Array<number>} ??? - 数値型の要素を持つ配列
* @returns {Array<number>} 与えられた配列の中の偶数だけを入れた配列
*/

function getEvenNumbers(arr) {
    // ここにコードを書きましょう。
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            ans.push(arr[i]);
        }
    }
    return ans;

}

actual = getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
expected = [2, 4, 6, 8];

// 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

// さらにテストを書きましょう。

actual = getEvenNumbers([1, 3, 5, 7]);
expected = [];

// 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = getEvenNumbers([2, 4, 6, 8]);
expected = [2, 4, 6, 8];

// 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

//7
/**
* @param {Array<number>} ??? - 数値型の要素を持つ配列
* @param {number} ??? - 配列の中の数字にかける数字
* @returns {Array<number>} 配列の中の数字に第2引数をかけた結果が入った新しい配列
*/

function getMultipliedArray(arr, num) {
    // ここにコードを書きましょう。
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        ans.push(arr[i] * num);
    }
    return ans;
}

actual = getMultipliedArray([1, 2, 3], 6);
expected = [6, 12, 18];

// 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

// さらにテストを書きましょう。

actual = getMultipliedArray([1, 2, 3], 0);
expected = [0, 0, 0];

// 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = getMultipliedArray([1, 2, 3], 1);
expected = [1, 2, 3];

// 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

//8
/**
* @param {Array<number>} ??? - 数値型の要素を持つ配列
* @returns {boolean} 与えられた配列が昇順になっているかを表すブーリアン
*/

function isSorted(arr) {
    // ここにコードを書きましょう。
    let ans = true;
    if (arr.length > 1) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                ans = false;
                break;
            }
        }
    }
    return ans;
}

actual = isSorted([1, 2, 3]);
expected = true;

if (actual === expected) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = isSorted([3, 2, 3]);
expected = false;

if (actual === expected) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

// さらにテストを書きましょう。
actual = isSorted([1, 1, 1]);
expected = true;

if (actual === expected) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = isSorted([1]);
expected = true;

if (actual === expected) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

//9
/**
* @param {Array<any>} ??? - 配列
* @param {string|number|boolean} ??? - 出現回数をカウントしたい値（値のデータ型は `string`、`number`、`boolean` のいずれかとする。）
* @returns {number} その値が配列内で出てきた回数
*/

function countOccurrences(arr, value) {
    // ここにコードを書きましょう。
    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i]) === value) {
            ans++;
        }
    }
    return ans;
}

actual = countOccurrences([1, 2, 3], 2);
expected = 1;

if (actual === expected) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = countOccurrences([1, 2, 2], 2);
expected = 2;

if (actual === expected) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = countOccurrences([1, 2, "elephant"], "elephant");
expected = 1;

if (actual === expected) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

// さらにテストを書きましょう。
actual = countOccurrences([], 0);
expected = 0;

if (actual === expected) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = countOccurrences([1, "1", 1, 1], 1);
expected = 3;

if (actual === expected) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

//10
/**
* @param {Array<number>} ???
* @param {"+"|"-"|"*"|"/"|"**"|"%"} ??? - 使用したい算術演算子を表す文字列
* @param {number} ??? - 使用したい被演算子
* @returns {Array<any>} 与えられた配列の各要素に、引数の算術演算子と被演算子を適用した結果が入った新たな配列
*/

function getOperatedArray(arr, operator, operand) {
    // ここにコードを書きましょう。
    let ans = [];

    for (let i = 0; i < arr.length; i++) {
        if (operator === "+") {
            ans.push(arr[i] + operand)
        } else if (operator === "-") {
            ans.push(arr[i] - operand)
        } else if (operator === "*") {
            ans.push(arr[i] * operand)
        } else if (operator === "/") {
            ans.push(arr[i] / operand)
        } else if (operator === "**") {
            ans.push(arr[i] ** operand)
        } else if (operator === "%") {
            ans.push(arr[i] % operand)
        }
    }
    return ans;
}

actual = getOperatedArray([1, 2, 3], "+", 5);
// [1, 2, 3] のそれぞれの要素に5をたす
// [1+5, 2+5, 3+5]
expected = [6, 7, 8];

// 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = getOperatedArray([9, 6, 3], "/", 3);
expected = [3, 2, 1];

// 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

  // さらにテストを書きましょう。
  actual = getOperatedArray([1, 2, 3], "**", 2);
expected = [1, 4, 9];

// 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = getOperatedArray([1, 2, 3], "%", 2);
expected = [1, 0, 1];

// 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}











