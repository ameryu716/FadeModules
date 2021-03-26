"use strict";
window.addEventListener("load",()=>{
    const navopen:HTMLElement = <HTMLElement>document.getElementById("navopen");
    const list:HTMLElement = <HTMLElement>document.getElementById("navlist");
    let inaction:boolean = true;

    function listinLeft(delay:number,elem:HTMLElement){
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

    function listoutLeft(delay:number,elem:HTMLElement){
        if(delay<10){
                elem.style.transition = delay+"s";
                list.style.left = "-500px";
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

    navopen.onclick = ()=>{
        navtoggle();
    }
})