import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import data from "../public/data/DATA.json";

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active", "previous");

    // Atur slide saat ini
    if (i === index) {
      slide.classList.add("active");
    }

    // Atur slide sebelumnya
    if (i === (index - 1 + slides.length) % slides.length) {
      slide.classList.add("previous");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000);

document.addEventListener("DOMContentLoaded", () => {
  const restaurants = data.restaurants;
  const restaurantGrid = document.getElementById("restaurantGrid");

  // Iterasi setiap item di data JSON
  restaurants.forEach((restaurant) => {
    // Buat elemen card baru
    const card = document.createElement("div");
    card.classList.add("card");

    // Isi konten card
    card.innerHTML = `
      <div class="image-container">
        <span class="location">Kota. ${restaurant.city}</span>
        <img src="${restaurant.pictureId}" alt="${restaurant.name}">
      </div>
      <div class="card-content">
        <p class="rating">Rating: ${restaurant.rating}</p>
        <h2 class="restaurant-name">${restaurant.name}</h2>
        <p class="description">${restaurant.description}</p>
      </div>
      `;

    // Tambahkan card ke grid
    restaurantGrid.appendChild(card);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const navbarItems = [
    { text: "Home", href: "#" },
    { text: "Favourite", href: "#" },
    { text: "About Us", href: "https://github.com/chenjacky32" },
  ];

  const navbarMenu = document.querySelector(".nav-menu");

  navbarItems.forEach((item) => {
    const listItem = document.createElement("li");
    const linkItem = document.createElement("a");

    linkItem.href = item.href;
    linkItem.textContent = item.text;

    if (item.text === "About Us") {
      linkItem.target = "_blank";
    }

    listItem.appendChild(linkItem);
    navbarMenu.appendChild(listItem);
  });
});
