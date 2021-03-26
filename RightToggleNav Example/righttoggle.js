function toggleAbilityAdd(terminal) {
    window.addEventListener("load", () => {
        const navRtoggleBt = document.getElementById("nav-c-switch");
        const CustomRMenu = document.getElementById("custom-r-menu");
        let rightMenuToggle = false;
        let toggleWidth = "";
        //端末ごとにメニュー引き出し幅変更
        if (terminal === "mobile") {
            toggleWidth = "-70.5vw";
        }
        else if (terminal === "PC") {
            toggleWidth = "-30.5vw";
        }
        navRtoggleBt.addEventListener("click", () => {
            if (rightMenuToggle) {
                //open
                CustomRMenu.style.right = toggleWidth;
                rightMenuToggle = false;
            }
            else {
                //close
                CustomRMenu.style.right = "0.5vw";
                rightMenuToggle = true;
            }
        });
    });
}
if (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
    toggleAbilityAdd("mobile");
}else{
    toggleAbilityAdd("PC");
}