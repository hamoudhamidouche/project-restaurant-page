import { displayInit } from "./initial.js";
import { displayMenu } from "./menu.js";
import { displayContact } from "./contact.js";
import "./styles.css";

const buttons = document.querySelectorAll(".nav-button");

displayInit();

buttons.forEach(button => {
    if(button.textContent === "Home") {
        button.addEventListener("click", displayInit);
    } else if (button.textContent === "Menu") {
        button.addEventListener("click", displayMenu);
    } else {
        button.addEventListener("click", displayContact);
    }
});