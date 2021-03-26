"use strict";
window.addEventListener("load",()=>{
    const navopen = document.getElementById("navopen");
    const list = document.getElementById("navlist");
    let inaction = true;

    function listinLeft(delay,elem){
        if(delay<10){
                elem.style.display = "block";
                elem.style.opacity = "0";
                elem.style.transition = delay+"s";
                setTimeout(()=>{
                    elem.style.opacity = "1";
                    elem.style.left = "0";
                },100)
        }else{
            throw new Error("フェード秒数が長すぎます");
        }
    }//※フェード秒数は10秒以内です
    function listoutLeft(delay,elem){
        if(delay<10){
                elem.style.transition = delay+"s";
                list[0].style.left = "-500px";
                elem.style.opacity = "0";
                setTimeout(()=>{
                    elem.style.display = "none";
                },delay*900)
        }else{
            throw new Error("フェード秒数が長すぎます");
        }
    }//※フェード秒数は10秒以内です
    function navtoggle(){
        if(inaction){
            // list[0].style.display = "none";
            inaction = false;
            listinLeft(0.5,list);
        }else{
            // list[0].style.display = "block";
            inaction = true;
            listoutLeft(0.5,list);
        }
    }

    navopen[0].onclick = ()=>{
        navtoggle();
        console.log("a");
    }
})