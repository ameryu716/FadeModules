# FadeModules
HTMLElements用のフェード効果モジュール群です。私用ですが指摘はぜひお願いします。

---
## headnavFade.js
・ヘッダーナビ用のフェードモジュールです。<br>
・ハンバーガーメニュークリックを想定しています。<br>
・フェード方向は左側です。<br>
・最低限のCSS指定しかしていませんので、bodyまたはwrap要素に`overflow:hidden`を指定し、フェード効果をつけるナビリストには`position:absolute`を指定してください。<br>
・引数は第一引数にフェード秒数を`秒[s]`単位で数値入力、第二引数に対象の`HTMLElement`を単数指定してください。<br>
・フェード秒数はデフォルトで10sが限度になっています。お好みで変えてください。<br>
使用例：↓

```
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
```

---
## opacityChangesFade.js

・汎用性の高いフェードモジュールです。<br>
・あらゆるelementsのフェードを想定しています。<br>
・opacity（透明度CSS）によるフェード効果を表現します。<br>
・CSSの事前指定は必要ありません。<br>
・引数は第一引数にフェード秒数を[s]単位で数値入力、第二引数以降はに対象elementsを指定してください(複数ok)。<br>
・フェード秒数はデフォルトで10sが限度になっています。お好みで変えてください。<br>
使用例：↓

```js
const elem1 = getElementsByClassName("e1");
const elem2 = document.getElementById("e2");
const switcher = document.getElementById("switcher");
const lever = true;

switch.onclick = ()=>{
    fadetoggle();
}
function fadetoggle(){
    if(lever){
        DelayFadeout(0.5,elem1[0],elem2);
        lever = false;
    }else{
        DelayFadein(0.5,elem1[0],elem2);
        lever = true;
    }
}
```
---
