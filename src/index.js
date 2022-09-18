import * as module from "./initial-page";
module.initialPage();

(function makePage(){
    const mainPage = document.querySelector(".main")
    window.onload = () => {
        module.homeInfos();
    }

    const homeBtn = document.querySelector(".homeBtn");
    homeBtn.addEventListener("click", () => {
        mainPage.replaceChildren()
        module.homeInfos();
    }) 

    const menuBtn = document.querySelector(".menuBtn");
    menuBtn.addEventListener("click", () => {
        mainPage.replaceChildren()
        module.menuInfos()
    })

})()