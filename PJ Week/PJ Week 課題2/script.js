'use strict'
// Please don't delete the 'use strict' line above

/**
 * ボタンがクリックされたら、食べ物の画像を表示する関数
 */
function showFood() {
    //結果反映用のエレメントを取得
    let result = document.getElementById("result");
    let name = document.getElementById("foodName");
    let img = document.getElementById("foodImg");

    //選択肢取得用のエレメントを取得
    let action = document.getElementsByName("action");
    let foodType = document.getElementsByName("foodType");

    //選択した項目を取得
    let checkedAction;
    let checkedFoodType;

    for (let i = 0; i < action.length; i++) {
        if (action[i].checked) {
            checkedAction = action[i].id;
        }
    }

    for (let i = 0; i < foodType.length; i++) {
        if (foodType[i].checked) {
            checkedFoodType = foodType[i].id;
        }
    }

    //選択肢に合わせて表示するテキストと画像を設定
    if (checkedAction == "eatingOut") {
        //外食
        if (checkedFoodType == "japaneseFood") {
            //外食・和食
            name.innerHTML = "【外食・和食】";
            img.setAttribute("src", "【画像URL】");
        } else if (checkedFoodType == "chineseFood") {
            //外食・中華
            name.innerHTML = "【外食・中華】";
            img.setAttribute("src", "【画像URL】");
        } else if (checkedFoodType == "westernFood") {
            //外食・洋食
            name.innerHTML = "【外食・洋食】";
            img.setAttribute("src", "【画像URL】");
        } else if (checkedFoodType == "ethnicFood") {
            //外食・エスニック
            name.innerHTML = "【外食・エスニック】";
            img.setAttribute("src", "【画像URL】");
        }
    } else if (checkedAction == "takeOut") {
        //テイクアウト
        if (checkedFoodType == "japaneseFood") {
            //テイクアウト・和食
            name.innerHTML = "【テイクアウト・和食】";
            img.setAttribute("src", "【画像URL】");
        } else if (checkedFoodType == "chineseFood") {
            //テイクアウト・中華
            name.innerHTML = "【テイクアウト・中華】";
            img.setAttribute("src", "【画像URL】");
        } else if (checkedFoodType == "westernFood") {
            //テイクアウト・洋食
            name.innerHTML = "【テイクアウト・洋食】";
            img.setAttribute("src", "【画像URL】");
        } else if (checkedFoodType == "ethnicFood") {
            //テイクアウト・エスニック
            name.innerHTML = "【テイクアウト・エスニック】";
            img.setAttribute("src", "【画像URL】");
        }
    } else if (checkedAction == "cooking") {
        //自炊
        if (checkedFoodType == "japaneseFood") {
            //自炊・和食
            name.innerHTML = "【自炊・和食】";
            img.setAttribute("src", "【画像URL】");
        } else if (checkedFoodType == "chineseFood") {
            //自炊・中華
            name.innerHTML = "【自炊・中華】";
            img.setAttribute("src", "【画像URL】");
        } else if (checkedFoodType == "westernFood") {
            //自炊・洋食
            name.innerHTML = "【自炊・洋食】";
            img.setAttribute("src", "【画像URL】");
        } else if (checkedFoodType == "ethnicFood") {
            //自炊・エスニック
            name.innerHTML = "【自炊・エスニック】";
            img.setAttribute("src", "【画像URL】");
        }
    }

    //結果を表示する
    result.style.display = "block";
}

