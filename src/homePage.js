import Background from "./images/background.jpg";

const buildHomePage = () => {
  const content = document.getElementById("content");

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");
  content.appendChild(mainContainer);

  const leftDiv = document.createElement("div");
  leftDiv.classList.add("left");
  mainContainer.appendChild(leftDiv);

  const firstHeader = document.createElement("h1");
  firstHeader.textContent = "Welcome to Casa del Sabor!";
  leftDiv.appendChild(firstHeader);

  const secondHeader = document.createElement("h2");
  secondHeader.innerHTML =
    "Discover the Authentic Flavors of <strong>Mexico</strong>";
  leftDiv.appendChild(secondHeader);

  const backgroundImage = new Image();
  backgroundImage.src = Background;
  mainContainer.appendChild(backgroundImage);

  const makeYourselfHeader = document.createElement("h2");
  makeYourselfHeader.textContent = "Make Yourself at Home";
  content.appendChild(makeYourselfHeader);

  const firstPadded = document.createElement("div");
  firstPadded.classList.add("padded");
  content.appendChild(firstPadded);

  const firstPaddedContent = document.createElement("p");
  firstPaddedContent.textContent =
    "At Casa del Sabor, we invite you on a culinary journey to Mexico, where every dish is crafted with passion and tradition. Nestled in the heart of Colorado Springs, our vibrant restaurant is a celebration of Mexican culture, from the lively ambiance to the mouthwatering aromas wafting from our kitchen.";
  firstPadded.appendChild(firstPaddedContent);

  /* */

  const eventsHeader = document.createElement("h2");
  eventsHeader.textContent = "Events & Specials";
  content.appendChild(eventsHeader);

  const secondPadded = document.createElement("div");
  secondPadded.classList.add("padded");
  content.appendChild(secondPadded);

  const secondPaddedContent = document.createElement("p");
  secondPaddedContent.textContent =
    "At Casa del Sabor, we invite you on a culinary journey to Mexico, where every dish is crafted with passion and tradition. Nestled in the heart of Colorado Springs, our vibrant restaurant is a celebration of Mexican culture, from the lively ambiance to the mouthwatering aromas wafting from our kitchen.";
  secondPadded.appendChild(secondPaddedContent);

  /* */

  const visitHeader = document.createElement("h2");
  visitHeader.textContent = "Visit Us";
  content.appendChild(visitHeader);

  const thirdPadded = document.createElement("div");
  thirdPadded.classList.add("padded");
  content.appendChild(thirdPadded);

  const thirdPaddedContent = document.createElement("p");
  thirdPaddedContent.textContent =
    "Conveniently located in the heart of Colorado Springs, Casa del Sabor is the perfect destination for family dinners, date nights, and celebrations with friends. Our warm and welcoming staff is dedicated to providing exceptional service, ensuring every visit is a memorable one.";
  thirdPadded.appendChild(thirdPaddedContent);

  // Link to Picture
  const aboutFooter = document.createElement("footer");
  content.appendChild(aboutFooter);

  const aboutFooterPara = document.createElement("p");
  aboutFooter.appendChild(aboutFooterPara);

  const aboutFooterLink = document.createElement("a");
  aboutFooterLink.href =
    "https://www.pexels.com/photo/fruit-salads-in-plate-1640774/";
  aboutFooterLink.target = "_blank";
  aboutFooterLink.textContent = "Photo Credit: Ella Olsson";
  aboutFooterPara.appendChild(aboutFooterLink);
};

export { buildHomePage };
