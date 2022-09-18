import { initialPage } from "./initial-page";
import { homeInfos } from "./home-infos";
import { menuInfos } from "./menu-infos";
import { contactInfos } from "./contact-infos";

initialPage();
homeInfos();

(function makePage(){
    const mainPage = document.querySelector(".main");
    
    const homeBtn = document.querySelector(".homeBtn");
    homeBtn.addEventListener("click", () => {
        mainPage.replaceChildren();
        homeInfos();
    }) 

    const menuBtn = document.querySelector(".menuBtn");
    menuBtn.addEventListener("click", () => {
        mainPage.replaceChildren();
        menuInfos();
    })

    const contactBtn = document.querySelector(".contactBtn");
    contactBtn.addEventListener("click", () => {
        mainPage.replaceChildren();
        contactInfos();
    })
})()