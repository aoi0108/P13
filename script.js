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
            name.innerHTML = "お寿司";
            img.setAttribute("src", "sushi.jpg");
        } else if (checkedFoodType == "chineseFood") {
            //外食・中華
            name.innerHTML = "小籠包";
            img.setAttribute("src", "xiaolongbao.jpg");
        } else if (checkedFoodType == "westernFood") {
            //外食・洋食
            name.innerHTML = "ピザ";
            img.setAttribute("src", "pizza.jpg");
        } else if (checkedFoodType == "ethnicFood") {
            //外食・エスニック
            name.innerHTML = "カレー";
            img.setAttribute("src", "curry.jpg");
        }
    } else if (checkedAction == "takeOut") {
        //テイクアウト
        if (checkedFoodType == "japaneseFood") {
            //テイクアウト・和食
            name.innerHTML = "牛めし";
            img.setAttribute("src", "gyu-don.jpg");
        } else if (checkedFoodType == "chineseFood") {
            //テイクアウト・中華
            name.innerHTML = "餃子";
            img.setAttribute("src", "jiaozi.jpg");
        } else if (checkedFoodType == "westernFood") {
            //テイクアウト・洋食
            name.innerHTML = "ハンバーガー";
            img.setAttribute("src", "hamburger.jpg");
        } else if (checkedFoodType == "ethnicFood") {
            //テイクアウト・エスニック
            name.innerHTML = "トムヤムクン";
            img.setAttribute("src", "tomyamkun.jpg");
        }
    } else if (checkedAction == "cooking") {
        //自炊
        if (checkedFoodType == "japaneseFood") {
            //自炊・和食
            name.innerHTML = "さばの味噌煮";
            img.setAttribute("src", "sabanomisoni.jpg");
        } else if (checkedFoodType == "chineseFood") {
            //自炊・中華
            name.innerHTML = "棒棒鶏";
            img.setAttribute("src", "bangbangji.jpg");
        } else if (checkedFoodType == "westernFood") {
            //自炊・洋食
            name.innerHTML = "ビーフシチュー";
            img.setAttribute("src", "beafStew.jpg");
        } else if (checkedFoodType == "ethnicFood") {
            //自炊・エスニック
            name.innerHTML = "生春巻き";
            img.setAttribute("src", "springRoll.jpg");
        }
    }

    //結果を表示する
    result.style.display = "block";
}


/**
 * 曜日・時間帯ごとにメッセージを表示する
 */
// function onload() {
//     // 曜日ごとのメッセージ
//     const date = new Date();
//     const daysOfWeek = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"];
//     const dayOfWeek = daysOfWeek[date.getDay()];
//     const messageElement = document.getElementById("dailyMessage");
//     const dailyMessages = [
//         "月曜日です。今週は外食の予定は多いですか？栄養バランスに気をつけましょう。",
//         "火曜日です。お気に入りのお店に足を運んでもいいかも。",
//         "水曜日です。週の中盤です。好きなものを食べて後半戦も乗り切りましょう！",
//         "木曜日です。週末まであと一息！忙しくても食事は抜かないでくださいね。",
//         "金曜日です。１週間お疲れ様です！夜はパーっと飲みませんか？",
//         "土曜日です。外食は混んでるかも？ゆっくり自炊もいいですね。",
//         "日曜日です。外食は混んでるかも？"
//     ];

//     // 時間帯ごとのメッセージ
//     const currentHour = date.getHours();
//     const hourlyMessages = [
//         "朝ごはん",
//         "ランチ",
//         "おやつタイム",
//         "ディナー"
//     ];
//     let hourlyMessage = "";
//     if (currentHour >= 4 && currentHour < 10) {
//         hourlyMessage = hourlyMessages[0];
//     } else if (currentHour >= 10 && currentHour < 14) {
//         hourlyMessage = hourlyMessages[1];
//     } else if (currentHour >= 14 && currentHour < 17) {
//         hourlyMessage = hourlyMessages[2];
//     } else {
//         hourlyMessage = hourlyMessages[3];
//     }
//     // メッセージをhtmlで表示
//     messageElement.textContent = `今日は${dailyMessages[date.getDay()] || "曜日情報が取得できませんでした。"} 充実した${hourlyMessage}をお過ごしください`;
// }