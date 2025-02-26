export default function initialPageLoad() {
    const content = document.querySelector("#content");
    const card = document.createElement("div");

    card.classList.add("card");

    const title = document.createElement("h1");
    
    title.textContent = "Silver Spoons";

    const imgHold = document.createElement("div");

    imgHold.classList.add("img-holder");

    const text = document.createElement("p");
    
    text.innerHTML = "He, who were not fed love with silver spoon,<br> will learn to lick it off the knives.";

    card.appendChild(title);
    card.appendChild(imgHold);
    card.appendChild(text);
    content.appendChild(card);

}