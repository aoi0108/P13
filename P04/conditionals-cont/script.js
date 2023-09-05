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
 * @param {number} ??? - 年齢
 * @returns {boolean} 与えられた年齢がティーンエイジャー（13歳から 19歳までの間：「thirTEEN」から「nineTEEN」）かどうか
 */

function isTeenager(age) {
    // ここにコードを書きましょう.
    let ans = false;
    if (age >= 13 && age <= 19) {
        ans = true;
    }
    return ans;
}

actual = isTeenager(3);
expected = false;

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = isTeenager(14);
expected = true;

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください。
test(isTeenager(20), false);
test(isTeenager(17), true);

//2
function isTeenager(age) {
    // ここにコードを書きましょう.
    if (typeof (age) != "number") {
        return "Invalid! Age is not a number!";
    } else {
        let ans = false;
        if (age >= 13 && age <= 19) {
            ans = true;
        }
        return ans;
    }
}
actual = isTeenager("Hello!");
expected = "Invalid! Age is not a number!";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = isTeenager(true);
expected = "Invalid! Age is not a number!";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = isTeenager();
expected = "Invalid! Age is not a number!";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

//3
/**
 * @param {string} ??? - 人の名前
 * @param {boolean} ??? - 丁寧な挨拶にするかどうかを表すブーリアン
 * @param {boolean} ??? - "Hello" なら true を、"Goodbye" なら false
 * @returns {string} 与えられた引数に応じた適切な挨拶の文章
 */

// ここにコードを書きましょう.
function anotherGreeting(name, superior, meet) {
    let ans;
    if (superior) {
        ans = name + "-san.";
    } else {
        ans = name + "!";
    }

    if (meet) {
        ans = "Hello, " + ans;
    } else {
        ans = "Goodbye, " + ans;
    }
    return ans;
}

actual = anotherGreeting("Mary", true, true);
expected = "Hello, Mary-san.";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = anotherGreeting("Mary", false, true);
expected = "Hello, Mary!";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = anotherGreeting("Felix", true, false);
expected = "Goodbye, Felix-san.";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください。
actual = anotherGreeting("Umebayashi", false, false);
expected = "Goodbye, Umebayashi!";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

//4
function anotherGreeting(name, superior, meet) {
    if (typeof (name) == "string" && typeof (superior) == "boolean" && typeof (meet) == "boolean") {
        let ans;
        if (superior) {
            ans = name + "-san.";
        } else {
            ans = name + "!";
        }

        if (meet) {
            ans = "Hello, " + ans;
        } else {
            ans = "Goodbye, " + ans;
        }
        return ans;
    }else{
        return "無効なインプットです！";
    }
}
actual = anotherGreeting(true, false, true);
expected = "無効なインプットです！";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = anotherGreeting("Sam", true, 0);
expected = "無効なインプットです！";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

//5
/**
 * @param {number} ??? - 0 以上 100 以下の点数
 * @returns {"A"|"B"|"C"|"D"|"F"} 点数に応じた成績
 */
function getLetterGrade(score){
    let ans;
    if(score>=90 && score<=100){
        ans="A";
    }else if(score>=80 && score<90){
        ans="B";
    }else if(score>=70 && score<80){
        ans="C";
    }else if(score>=60 && score<70){
        ans="D";
    }else {
        ans="F";
    }
    return ans;

}

actual = getLetterGrade(95);
expected = "A";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください
test(getLetterGrade(89),"B");
test(getLetterGrade(60),"D");

//6
function getLetterGrade(score){
    let ans;
    if(score>=90 && score<=100){
        ans="A";
    }else if(score>=80 && score<90){
        ans="B";
    }else if(score>=70 && score<80){
        ans="C";
    }else if(score>=60 && score<70){
        ans="D";
    }else if(score>100 || score<0){
        ans="無効な点数です。";
    }else{
        ans="F";
    }
    return ans;

}
actual = getLetterGrade(101);
expected = "無効な点数です。";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください
test(getLetterGrade(-1),"無効な点数です。");

//7
/**
 * @param {"A"|"B"|"C"|"D"|"F"} ??? - 成績
 * @returns {number} 各成績における最高点
 */

function getBestNumericalGrade(grade){
    let ans;
    if(grade=="A"){
        ans=100;
    }else if(grade=="B"){
        ans=89;
    }else if(grade=="C"){
        ans=79;
    }else if(grade=="D"){
        ans=69;
    }else if(grade=="E"){
        ans=59;
    }
    return ans;
}

actual = getBestNumericalGrade("A");
expected = 100;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getBestNumericalGrade("B");
expected = 89;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください
test(getBestNumericalGrade("C"),79);
test(getBestNumericalGrade("D"),69);

//8
function getBestNumericalGrade(grade){
    let ans;
    if(grade=="A"){
        ans=100;
    }else if(grade=="B"){
        ans=89;
    }else if(grade=="C"){
        ans=79;
    }else if(grade=="D"){
        ans=69;
    }else if(grade=="F"){
        ans=59;
    }else{
        ans="無効な点数です。";
    }
    return ans;
}
actual = getBestNumericalGrade("恐竜ってすばらしい");
expected = "無効な点数です。";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getBestNumericalGrade(100);
expected = "無効な点数です。";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください
test(getBestNumericalGrade("E"), "無効な点数です。")

