export function homeInfos(){
    const mainPage = document.querySelector(".main");

    const mainContent = document.createElement("div");
    mainContent.classList.add("infos");
    mainPage.appendChild(mainContent);

    const description = document.createElement("p");
    description.textContent = "Pizzeria à Metz, Manita vous propose un large choix de pizzas, des plats cuisinés savoureux ainsi que de nombreuses boissons et desserts.";
    mainContent.appendChild(description);

    const manitaImg = document.createElement("img");
    manitaImg.src = "./manita.png";
    mainContent.appendChild(manitaImg);

}
