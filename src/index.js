import "./styles.css";
import { buildHomePage } from "./homePage";

const homeButton = document.getElementById("home-button");
const menuButton = document.getElementById("menu-button");
const aboutButton = document.getElementById("about-button");

const content = document.getElementById("content");

function clearPage() {
  content.innerHTML = "";
}

// buildHomePage();

homeButton.addEventListener("click", function () {
  clearPage();
  buildHomePage();
});

menuButton.addEventListener("click", function () {
  clearPage();
});

aboutButton.addEventListener("click", function () {
  clearPage();
});
