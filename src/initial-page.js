const bodyContent = document.getElementById("content")

export function initialPage(){
    //Header is here
    const header = document.createElement("header");
    const title = document.createElement("h1");
        title.textContent = "Manita";

    bodyContent.appendChild(header);
    header.appendChild(title);

    //Nav
    const headerDiv = document.createElement("div");
    const headUl = document.createElement("ul");
        headUl.classList.add("nav");
    
    for (let i = 0; i < 3; i++){
        const headLi = document.createElement("li");
        headUl.append(headLi);
    }

    const home = document.createElement("a");
    home.classList.add("homeBtn")
    home.textContent = "Accueil";
    home.href = "#";
    const menu = document.createElement("a");
    menu.classList.add("menuBtn")
    menu.textContent = "Menu";
    menu.href = "#"
    const contact = document.createElement("a");
    contact.textContent = "Contact";
    contact.href = "#";

    header.appendChild(headerDiv);
    headerDiv.appendChild(headUl);
    document.querySelector("li:nth-Child(1)").appendChild(home);
    document.querySelector("li:nth-Child(2)").appendChild(menu);
    document.querySelector("li:nth-Child(3)").appendChild(contact);

    //Main
    const mainInfos = document.createElement("div");
    mainInfos.classList.add("main")
    bodyContent.appendChild(mainInfos)
}

//Home Content
export function homeInfos(){
    const mainPage = document.querySelector(".main");

    const mainContent = document.createElement("div");
    mainContent.classList.add("infos");
    mainPage.appendChild(mainContent);

    const description = document.createElement("p");
    description.textContent = "Pizzeria à Metz, Manita vous propose un large choix de pizzas, des plats cuisinés savoureux ainsi que de nombreuses boissons et desserts."
    mainContent.appendChild(description);

    const manitaImg = document.createElement("img");
    manitaImg.src = "./manita.png";
    mainContent.appendChild(manitaImg);

}

//Menu Content
export function menuInfos(){
    const mainPage = document.querySelector(".main");

    const mainContent = document.createElement("div");
    mainContent.classList.add("menuInfos");
    mainPage.appendChild(mainContent);

    for (let i = 0; i < 12; i++){
        const pizzaDiv = document.createElement("div");
        mainContent.appendChild(pizzaDiv)
    }

}