export const content = document.querySelector("#content");

export const displayMenu = () => {
    content.innerHTML = "";
    content.style.backgroundImage = "none";
    content.removeAttribute("style");

    const mainTitle = document.createElement("h1");
    mainTitle.textContent = "MENU";

    const outerMenuWrapper = document.createElement("div");
    outerMenuWrapper.classList.add("outer-menu-wrapper");

    const subTitle = document.createElement("h2");
    subTitle.textContent = "FOOD";

    const innerMenuWrapper = document.createElement("div");
    innerMenuWrapper.classList.add("inner-menu-wrapper");


    const foods = ["Ayam Bakar", "Ikan Goreng", "Bebek Panggang"];
    foods.forEach(item => {
        const itemTitle = document.createElement("h3");
        itemTitle.textContent = item;
        innerMenuWrapper.appendChild(itemTitle);
    });


    content.appendChild(mainTitle);
    content.appendChild(subTitle);
    content.appendChild(outerMenuWrapper);
    outerMenuWrapper.appendChild(innerMenuWrapper);
};

