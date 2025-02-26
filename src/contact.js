export const content = document.querySelector("#content");
import bowl from "./bowl.jpg";

export const displayContact = () => {
    content.innerHTML = "";
    content.style.backgroundImage = "none";
    content.removeAttribute("style");
    content.style.display = "flex";
    content.style.justifyContent = "center";
    content.style.alignItems = "center";
    content.style.padding = "1em 3em";
    content.style.gap = "3rem";


    const contactTitle = document.createElement("h2");
    contactTitle.textContent = "GET IN TOUCH";

    const contactWrapper = document.createElement("div");
    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "+62 8123456780";
    const email = document.createElement("p");
    email.textContent = "example@gmail.com";
    const address = document.createElement("p");
    address.textContent = "Jl. Jalan Gg. Ikan Goreng No.14045";

    const foodImg = document.createElement("img");
    foodImg.src = bowl;
    foodImg.style.maxWidth = "100%";
    foodImg.style.maxHeight = "300px";

    contactWrapper.appendChild(contactTitle);
    contactWrapper.appendChild(phoneNumber);
    contactWrapper.appendChild(email);
    contactWrapper.appendChild(address);
    content.appendChild(contactWrapper);
    content.appendChild(foodImg);
};