import "./styles.css";
import initialPageLoad from './initial.js';
import menuPageLoad from './menu.js';
import aboutPageLoad from './about.js';

function clearContent() {
    const mainContent = document.querySelector("#content");
    if (mainContent) {
      mainContent.innerHTML = ""; 
    }
};

initialPageLoad();

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const about = document.querySelector("#about");


home.addEventListener("click", () => {
    clearContent();
    initialPageLoad();
});
menu.addEventListener("click", () => {
    clearContent();
    menuPageLoad();
});
about.addEventListener("click", () => {
    clearContent();
    aboutPageLoad();
});