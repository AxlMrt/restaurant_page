export function menuInfos(){
    const mainPage = document.querySelector(".main");

    const mainContent = document.createElement("div");
    mainContent.classList.add("menuInfos");
    mainPage.appendChild(mainContent);

    for (let i = 0; i < 12; i++){
        const pizzaDiv = document.createElement("div");
        mainContent.appendChild(pizzaDiv);
    }
}