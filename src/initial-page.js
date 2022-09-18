export function initialPage(){
    const bodyContent = document.getElementById("content")

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
    contact.classList.add("contactBtn")
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