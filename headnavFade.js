const listinLeft = (delay,node)=>{
    if(delay<10){
            node.style.display = "block";
            node.style.opacity = "0";
            node.style.transition = delay+"s";
            setTimeout(()=>{
                node.style.opacity = "1";
                node.style.left = "0";
            },100)
    }else{
        throw new Error("フェード秒数が長すぎます");
    }
}//※フェード秒数は10秒以内です

const listoutLeft = (delay,node)=>{
    if(delay<10){
            node.style.transition = delay+"s";
            list[0].style.left = "-500px";
            node.style.opacity = "0";
            setTimeout(()=>{
                node.style.display = "none";
            },delay*900)
    }else{
        throw new Error("フェード秒数が長すぎます");
    }
}//※フェード秒数は10秒以内です

export {listinLeft,listoutLeft};