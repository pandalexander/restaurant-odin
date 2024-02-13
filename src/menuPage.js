const buildMenuPage = () => {
  const content = document.getElementById("content");

  const menuHeader = document.createElement("h1");
  menuHeader.textContent = "Our Delicious (yet brief) Menu";
  content.appendChild(menuHeader);

  const beansAndRice = document.createElement("h3");
  beansAndRice.textContent =
    "Gluten Free and Vegan options available upon request";
  content.appendChild(beansAndRice);

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  content.appendChild(menuContainer);

  const firstMenuItem = document.createElement("div");
  firstMenuItem.classList.add("menu-item");
  menuContainer.appendChild(firstMenuItem);

  const firstItemHeader = document.createElement("h2");
  firstItemHeader.textContent = "Tacos al Pastor";
  firstMenuItem.appendChild(firstItemHeader);

  const firstItemPara = document.createElement("p");
  firstItemPara.textContent =
    "Marinated pork cooked on a vertical rotisserie, served on warm corn tortillas with fresh pineapple, cilantro, and onions. Accompanied by a side of homemade salsa verde and lime wedges.";
  firstMenuItem.appendChild(firstItemPara);

  const firstItemSpan = document.createElement("span");
  firstItemSpan.textContent = "$10.99";
  firstMenuItem.appendChild(firstItemSpan);

  /* */

  const secondMenuItem = document.createElement("div");
  secondMenuItem.classList.add("menu-item");
  menuContainer.appendChild(secondMenuItem);

  const secondItemHeader = document.createElement("h2");
  secondItemHeader.textContent = "Enchiladas Suizas";
  secondMenuItem.appendChild(secondItemHeader);

  const secondItemPara = document.createElement("p");
  secondItemPara.textContent =
    "Corn tortillas filled with tender shredded chicken, smothered in a creamy tomatillo sauce and topped with melted cheese. Served with Mexican rice, refried beans, and a dollop of sour cream.";
  secondMenuItem.appendChild(secondItemPara);

  const secondItemSpan = document.createElement("span");
  secondItemSpan.textContent = "$12.99";
  secondMenuItem.appendChild(secondItemSpan);

  /* */

  const thirdMenuItem = document.createElement("div");
  thirdMenuItem.classList.add("menu-item");
  menuContainer.appendChild(thirdMenuItem);

  const thirdMenuHeader = document.createElement("h2");
  thirdMenuHeader.textContent = "Carne Asada Burrito";
  thirdMenuItem.appendChild(thirdMenuHeader);

  const thirdItemPara = document.createElement("p");
  thirdItemPara.textContent =
    "Grilled marinated steak, wrapped in a large flour tortilla with refried beans, Mexican rice, cheese, guacamole, and pico de gallo. Served with a side of crispy tortilla chips and salsa.";
  thirdMenuItem.appendChild(thirdItemPara);

  const thirdItemSpan = document.createElement("span");
  thirdItemSpan.textContent = "$11.99";
  thirdMenuItem.appendChild(thirdItemSpan);

  /* */

  const fourthMenuItem = document.createElement("div");
  fourthMenuItem.classList.add("menu-item");
  menuContainer.appendChild(fourthMenuItem);

  const fourthMenuHeader = document.createElement("h2");
  fourthMenuHeader.textContent = "Chiles Rellenos";
  fourthMenuItem.appendChild(fourthMenuHeader);

  const fourthItemPara = document.createElement("p");
  fourthItemPara.textContent =
    "Roasted poblano peppers stuffed with a savory mixture of melted cheese, corn, and black beans, then lightly battered and fried to perfection. Served with a side of tangy ranchero sauce, Mexican rice, and a garnish of fresh avocado slices.";
  fourthMenuItem.appendChild(fourthItemPara);

  const fourthItemSpan = document.createElement("span");
  fourthItemSpan.textContent = "$13.99";
  fourthMenuItem.appendChild(fourthItemSpan);
};

export { buildMenuPage };
