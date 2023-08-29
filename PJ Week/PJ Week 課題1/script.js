'use strict'
// Please don't delete the 'use strict' line above
function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Yay! Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.trace();
        console.groupEnd();
    }
}

//1
/**
* @param {Array<any>} ??? - 配列
* @returns {boolean} 与えられた配列の要素が重複を含んでいないかを表すブーリアン
*/

function haveMultipleElements(arr) {
    const set_arr = new Set(arr);//setに変換
    return arr.length == set_arr.size;//配列の長さとsetの長さを比較
}

// テストを実行
test(haveMultipleElements([1, 2, 3, 4]), true);
test(haveMultipleElements([1, 3, 3, 4]), false);


//2
function greatestcommondivisor(num1, num2) {
    if (num1 % num2==0) {//あまりが0の場合
        return Math.min(num1,num2);//小さい方の値を返す
    } else {//あまりが0以外の場合
        return greatestcommondivisor(num2, num1%num2);//再帰させる
    }
}

// テストを実行
test(greatestcommondivisor(10, 20), 10);
test(greatestcommondivisor(777, 185), 37);
test(greatestcommondivisor(400, 395), 5);


//3
const hands = new Array("パー", "グー", "チョキ");
const player = "パー"

/**
    * @param {int} min - ランダムで出したい値の最小値
    * @param {int} max - ランダムで出したい値の最大値より1つ大きい値
    *
    * @returns {int}} min 以上 max 未満 の整数値を「ランダムで」出力
    */

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// 1つめの引数を0, 2つ目の引数を3とすると, 0から2の整数がランダムで出力される
console.log(getRandomInt(0, 3))

// 上記のgetRandomInt関数と、配列 hands を生かしてジャンケンゲームを作成してみましょう！

function rockpaperscissors(value1,value2){
    if(value1==value2){//同じ手であるか判定
        return "あいこ";
    }else if((value1=="グー" && value2=="チョキ")||(value1=="チョキ" && value2=="パー")||(value1=="パー" && value2=="グー")){
        return "あなたの勝ち";
    }else{
        return "あなたの負け";
    }
}

console.log(rockpaperscissors(player,hands[getRandomInt(0, 3)]));
console.log(rockpaperscissors(player,hands[getRandomInt(0, 3)]));
console.log(rockpaperscissors(player,hands[getRandomInt(0, 3)]));


//4
// ここに関数を作成しましょう。
function flatten(arr){
    return [].concat(...arr);//配列を結合するメソッドに、引数としてarrの各要素を渡す
}

// テストを実行
test(
    flatten([
      [1, 2, 3],
      [4, 5, 6],
    ])
  ,[1, 2, 3, 4, 5, 6]); 

test(flatten([1, 2, 3, [4, 5, 6]]), [1, 2, 3, 4, 5, 6]); 

test(flatten([[1], [2], [3], [4, 5, 6]]),[1, 2, 3, 4, 5, 6]); 

