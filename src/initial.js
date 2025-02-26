import bowl from "./bowl.jpg";

export const displayInit = () => {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    content.style.backgroundImage = `url(${bowl})`;
    content.style.display = "flex";
    content.style.justifyContent = "center";
    content.style.alignItems = "center";

    
    const heroTitle = document.createElement("h1");
    heroTitle.textContent = "Elegance of Fire and Flavor";
    heroTitle.style.color = "white";
    heroTitle.classList.add("hero-title");
    
    content.appendChild(heroTitle);
};

displayInit();