export default function aboutPageLoad() {
    const content = document.querySelector("#content");
    const card = document.createElement("div");

    card.classList.add("card");

    const title = document.createElement("h1");
    
    title.textContent = "Contact";

    const imgHold = document.createElement("div");

    imgHold.classList.add("img-holder");

    const text = document.createElement("p");
    
    text.innerHTML = "+213-884-346-993 <br> 123 Street, California, USA";
    card.appendChild(title);
    card.appendChild(imgHold);
    card.appendChild(text);
    content.appendChild(card);

}