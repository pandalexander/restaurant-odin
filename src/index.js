import "./styles.css";
import { buildHomePage } from "./homePage";
import { buildMenuPage } from "./menuPage";
import { buildAboutPage } from "./aboutPage";

const homeButton = document.getElementById("home-button");
const menuButton = document.getElementById("menu-button");
const aboutButton = document.getElementById("about-button");

const content = document.getElementById("content");

function clearPage() {
  content.innerHTML = "";
}

buildHomePage();

homeButton.addEventListener("click", function () {
  clearPage();
  buildHomePage();
});

menuButton.addEventListener("click", function () {
  clearPage();
  buildMenuPage();
});

aboutButton.addEventListener("click", function () {
  clearPage();
  buildAboutPage();
});
