export function contactInfos(){
    const mainPage = document.querySelector(".main");

    const mainContent = document.createElement("div");
    mainContent.classList.add("infos");
    mainPage.appendChild(mainContent);

    const tel = document.createElement("p");
    tel.textContent = " ☎️ Commandez au 03 87 79 07 73";
    mainContent.appendChild(tel);

    const divMap = document.createElement("div");
    divMap.classList.add("map");
    mainContent.appendChild(divMap);

}