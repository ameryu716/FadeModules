# FadeModules
HTMLElements用のフェード効果モジュール群です。私用ですが指摘はぜひお願いします。

/////////////////////////////////////////////////////
###headnavFade.js
・ヘッダーナビ用のフェードモジュールです。
・ハンバーガーメニュークリックを想定しています。
・フェード方向は左側です。
・最低限のCSS指定しかしていませんので、bodyまたはwrap要素にoverflow:hiddenを指定し、フェード効果をつけるナビリストにはposition:absolute;を指定してください。
・引数は第一引数にフェード秒数を[s]単位で数値入力、第二引数に対象elementを単数指定してください。
・フェード秒数はデフォルトで10sが限度になっています。お好みで変えてください。
//使用例：↓

const navopen = document.getElementsByClassName("navopen");
navopen[0].onclick = ()=>{
    navtoggle();
    console.log("a");
}
const list = document.getElementsByClassName("navlist");
let status = true;

function navtoggle(){
    if(status){
        // list[0].style.display = "none";
        status = false;
        listinLeft(0.5,list[0]);
    }else{
        // list[0].style.display = "block";
        status = true;
        listoutLeft(0.5,list[0]);
    }
}


//使用例：↑
////////////////////////////////////////////////////
