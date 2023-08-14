'use strict'
// Please don't delete the 'use strict' line above

//1
function add(numOne, numTwo) {
  return numOne + numTwo;
}

// テスト
console.log(add(4, 3)); // 7 を表示
console.log(add(100, 42)); // => 142

//2
console.log(add(100)); // 何が起こる？
console.log(add(1, 4, 5)); // 何が起こる？

//3
function simpleFunctionA() {
  return "Hello simple function A";
}

function simpleFunctionB() {
  console.log("Hello simple function B");
}

console.log(simpleFunctionA(), "--> From running Simple Function A");
console.log(simpleFunctionB(), "--> From running Simple Function B");

//4
function average(num1, num2) {
  return (num1 + num2) / 2.0;
}

console.log(average(4, 6)); // => 5
console.log(average(100, 42)); // => 71
console.log(average(1, 2)); // => 1.5
console.log(average(1, 2, 3)); // => 1.5
console.log(average(1)); // => 1.5

//5
//引数が数字になっているので変数に変更
function square(num) {
  return num * num;
}

//引数が文字になっているので変数に変更
function square(x) {
  return x * x;
}
console.log(square(2));

//6
function Square(monkey) {
  return monkey ** 2;
}
console.log(Square(2));

//7
function cube(x) {
  return x ** 3;
}
console.log(cube(2));

//8
function waffleMaker(topping) {
  return topping + " Waffle"
}

// テスト
console.log(waffleMaker("Apple")); // => Apple Waffle
console.log(waffleMaker("Honey")); // => Honey Waffle

//9
function circlearea(radius) {
  return radius * radius * Math.PI;
}

console.log(circlearea(2));

//10
function simpleHelloA() {
  console.log("hello");
}

function simpleHelloB() {
  return "hello";
}

const a = simpleHelloA();//何も返ってきていない
const b = simpleHelloB();//文字列が返ってきている
console.log(a, b);

//11
function createGreeting(greetingPhrase, instructorName) {
  return greetingPhrase + ", " + instructorName + "!";
}

console.log(createGreeting("Good morning", "Mike")); //"Good morning, Mike!" を表示
console.log(createGreeting("Hello", "Beau")); // "Hello, Beau!" を表示
console.log(createGreeting("Good evening", "Alex")); // "Good evening, Alex!" を表示


//P02-2
//1
console.log(2 + 3 * 10 < 50);

//2
function isEqual(valueOne, valueTwo) {
  return valueOne == valueTwo;
}

console.log(isEqual(1, "1"));

//3-1
function isGreaterThan(valueOne, valueTwo) {
  return valueOne > valueTwo;
}

console.log(isGreaterThan(3, 2));

//3-2
console.log(isGreaterThan(1, 2));

//4
function isOfAge(age) {
  return age >= 20;
}

//5
function isEven(n) {
  return n % 2 == 0;
}

//6
//立方体の体積
function cubevolume(radius){
  return radius ** 3;
}

//球の体積
function spherevolume(radius) {
  return radius ** 3 * Math.PI * 4 / 3;
}
console.log(cubevolume(1));
console.log(spherevolume(1));

//7
//両方の長さが8文字以上
function validCredentials(username,password){
  return (username.length>=8 && password.length>=8);
}

console.log(validCredentials("abcdefgh","abcdefgh"));

//8
function isEven(n){
  n=n/2.0;
  return Number.isInteger(n);
}
console.log(isEven(0));
console.log(isEven(1));

//9
function isOfAge(age) {
  if(age >= 20){
    console.log("飲酒OK");
  }
}


