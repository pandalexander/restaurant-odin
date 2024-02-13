const buildAboutPage = () => {
  const content = document.getElementById("content");

  const aboutHeader = document.createElement("h1");
  aboutHeader.textContent = "About Casa del Sabor";
  content.appendChild(aboutHeader);

  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-container");
  content.appendChild(aboutContainer);

  const aboutSection = document.createElement("section");
  aboutSection.setAttribute("id", "about-us");
  aboutContainer.appendChild(aboutSection);

  const img1 = document.createElement("img");
  img1.src = "../src/images/about-us.jpg";
  img1.alt = "Casa del Sabor Restaurant Table";
  img1.classList.add("restaurant-image");

  aboutSection.appendChild(img1);

  const p1 = document.createElement("p");
  p1.textContent =
    "Welcome to Casa del Sabor, your ultimate destination for authentic Mexican cuisine! Nestled in the heart of Colorado Springs, our restaurant is a vibrant hub where flavors, culture, and community come together";
  aboutSection.appendChild(p1);

  const p2 = document.createElement("p");
  p2.textContent =
    "At Casa del Sabor, we believe in celebrating the rich culinary heritage of Mexico. Every dish on our menu is crafted with care and attention to detail, using only the finest ingredients and traditional recipes passed down through generations.";
  aboutSection.appendChild(p2);

  const aboutHeader_2 = document.createElement("h2");
  aboutHeader_2.textContent = "Our Mission";
  aboutSection.appendChild(aboutHeader_2);

  const p3 = document.createElement("p");
  p3.textContent =
    "Our mission is simple: to provide our guests with an unforgettable dining experience that captures the essence of Mexican culture. Whether you're joining us for a casual meal with friends or a special celebration with loved ones, we strive to create a warm and welcoming atmosphere where everyone feels like family.";
  aboutSection.appendChild(p3);

  const aboutHeader_3 = document.createElement("h2");
  aboutHeader_3.textContent = "The Casa del Sabor Experience";
  aboutSection.appendChild(aboutHeader_3);

  const p4 = document.createElement("p");
  p4.textContent =
    "Step inside Casa del Sabor and immerse yourself in the sights, sounds, and flavors of Mexico. From the colorful decor to the aroma of sizzling spices, every detail is designed to transport you to the streets of Mexico City.";
  aboutSection.appendChild(p4);

  const p5 = document.createElement("p");
  p5.textContent =
    "Our menu features a tantalizing array of Mexican classics and contemporary creations, each bursting with bold flavors and vibrant colors. Our talented chefs are dedicated to delivering an authentic culinary experience that will leave you craving more.";
  aboutSection.appendChild(p5);

  const aboutHeader_4 = document.createElement("h2");
  aboutHeader_4.textContent = "Community and Sustainability";
  aboutSection.appendChild(aboutHeader_4);

  const p6 = document.createElement("p");
  p6.textContent =
    "At Casa del Sabor, we're committed to supporting our local community and preserving the environment for future generations. We source our ingredients from local farmers and suppliers whenever possible, ensuring the freshest flavors while reducing our carbon footprint.";
  aboutSection.appendChild(p6);

  const p7 = document.createElement("p");
  p7.textContent =
    "Additionally, we believe in giving back to the community that has given us so much. Through partnerships with local charities and organizations, we strive to make a positive impact on the lives of those in need.";
  aboutSection.appendChild(p7);

  const aboutHeader_5 = document.createElement("h2");
  aboutHeader_5.textContent = "Visit Us Today!";
  aboutSection.appendChild(aboutHeader_5);

  const p8 = document.createElement("p");
  p8.textContent =
    "Ready to embark on a culinary adventure? Join us at Casa del Sabor and experience the magic of Mexico right here in Colorado Springs. Whether you're a seasoned foodie or simply curious to explore new flavors, we can't wait to welcome you to our table!";
  aboutSection.appendChild(p8);

  // Link to Picture
  const aboutFooter = document.createElement("footer");
  content.appendChild(aboutFooter);

  const aboutFooterPara = document.createElement("p");
  aboutFooter.appendChild(aboutFooterPara);

  const aboutFooterLink = document.createElement("a");
  aboutFooterLink.href =
    "https://www.pexels.com/photo/person-holding-green-glass-bottle-7772200/";
  aboutFooterLink.target = "_blank";
  aboutFooterLink.textContent = "Photo Credit: Los Muertos Crew";
  aboutFooterPara.appendChild(aboutFooterLink);
};

export { buildAboutPage };
