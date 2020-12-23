const DelayFadein = (delay,...node)=>{
    if(delay<10){
        for(let i=0;i<node.length;i++){
            node[i].style.display = "block";
            node[i].style.opacity = "0";
            node[i].style.transition = delay+"s";
            setTimeout(()=>{
                node[i].style.opacity = "1";
            },100)
        }
    }else{
        console.error("フェード秒数が長すぎます");
    }
}//※フェード秒数は10秒以内です

const DelayFadeout = (delay,...node)=>{
    if(delay<10){
        for(let i=0;i<node.length;i++){
            node[i].style.transition = delay+"s";
            node[i].style.opacity = "0";
            setTimeout(()=>{
                node[i].style.display = "none";
            },delay*900)
        }
    }else{
        console.error("フェード秒数が長すぎます");
    }
}//※フェード秒数は10秒以内です

export {DelayFadein,DelayFadeout};