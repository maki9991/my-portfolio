const button0 = document.getElementById("button0"); //誕生日のボタン
const button1 = document.getElementById("button1"); //趣味のボタン
const button2 = document.getElementById("button2"); //大学のボタン
const button3 = document.getElementById("button3"); //出身地のボタン

button0.onclick = function () {
  display0.textContent = "9月25日\n天秤座です";
};
button1.onclick = function () {
  display1.textContent = "ガーデニング\n値下げ価格の植物を買うことが多いです";
};

button2.onclick = function () {
  display2.textContent = "奈良女子大学\n構内によく鹿がいます";
};

button3.onclick = function () {
  display3.textContent =
    "兵庫県\n神戸だけじゃなくてたくさん楽しいところがあります！";
};
