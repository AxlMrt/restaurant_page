console.log(document.getElementById("content"));

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
for (i = 0; i < 3; i++){
    const headLi = document.createElement("li");
    headUl.append(headLi);
}

const home = document.createElement("a");
home.textContent = "Accueil";
home.href = "#";
const menu = document.createElement("a");
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

//Main Content
const homeInfos = document.createElement("div");
homeInfos.classList.add("infos");
bodyContent.appendChild(homeInfos);

const description = document.createElement("p");
description.textContent = "Pizzeria à Metz, Manita vous propose un large choix de pizzas, des plats cuisinés savoureux ainsi que de nombreuses boissons et desserts."
homeInfos.appendChild(description);

const manitaImg = document.createElement("img");
manitaImg.src = "./manita.png";
homeInfos.appendChild(manitaImg);

//  
// 


