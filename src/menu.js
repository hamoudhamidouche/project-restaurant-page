export default function menuPageLoad() {
    const content = document.querySelector("#content");
    const wrapper = document.createElement("div");

    wrapper.classList.add("wrapper");
    content.appendChild(wrapper);

    const createCard = (title, description) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardTitle = document.createElement("p");
    cardTitle.classList.add("dish");
    cardTitle.textContent = title;

    const cardText = document.createElement("p");
    cardText.innerHTML = description; 

    card.appendChild(cardTitle);
    card.appendChild(cardText);
    wrapper.appendChild(card);
    };

    createCard("Margherita Pizza", "A classic Italian pizza topped with fresh tomatoes, mozzarella, and basil.");
    createCard("Spaghetti Carbonara", "Creamy pasta with pancetta, parmesan, and a hint of black pepper.");
    createCard("Chicken Tikka Masala", "Tender chicken chunks simmered in a rich spiced tomato sauce.");
    // createCard("Sushi Platter", "A delightful assortment of fresh sashimi, nigiri, and rolls.");
    // createCard("Beef Bourguignon", "Slow-cooked beef stew with red wine, mushrooms, and pearl onions.");
    // createCard("Chocolate Lava Cake", "A warm, gooey chocolate dessert with a molten center.");


}