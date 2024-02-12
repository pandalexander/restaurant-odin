const buildHomePage = () => {
  console.log("Hi! FirstLoad.Js Works teeHEe!!");

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

  const image = document.createElement("img");
  image.src = "../src/images/background.jpg";
  mainContainer.appendChild(image);
};

// const content = document.getElementById("content");

// const mainContainer = document.createElement("div");
// mainContainer.classList.add("main-container");
// content.appendChild(mainContainer);

// const leftDiv = document.createElement("div");
// leftDiv.classList.add("left");
// content.appendChild(mainContainer);

// const firstHeader = document.createElement("h1");
// firstHeader.textContent = "Welcome to Casa del Sabor!";
// leftDiv.appendChild(firstHeader);

// const secondHeader = document.createElement("h1");
// secondHeader.textContent = "Discover the Authentic Flavors of Mexico";
// leftDiv.appendChild(secondHeader);

export { buildHomePage };
