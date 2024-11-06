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
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.querySelector(".hamburger-menu");
  const restaurantTitle = document.getElementById("restaurant-title");
  const restaurantGrid = document.getElementById("restaurantGrid");

  //untuk ngecek posisi breakpoint
  function updateTabindex() {
    const windowWidth = window.innerWidth;
    const isMobile = windowWidth <= 640;

    if (isMobile) {
      // Arahkan fokus pertama kali ke hamburger jika breakpoint <= 640px
      hamburger.setAttribute("tabindex", "3");
      restaurantTitle.setAttribute("tabindex", "4"); // Setelah hamburger, fokus ke judul restoran
    } else {
      // Arahkan fokus ke judul restoran jika breakpoint > 640px
      hamburger.setAttribute("tabindex", "-1"); // Menghilangkan tabindex pada hamburger jika tidak diperlukan
      restaurantTitle.setAttribute("tabindex", "5"); // Fokus ke judul restoran
    }
  }

  // Panggil updateTabindex saat DOM siap dan saat resize
  updateTabindex();
  window.addEventListener("resize", updateTabindex);

  // Menambahkan item restoran ke grid
  const restaurants = data.restaurants;
  restaurants.forEach((restaurant, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    // Tambahkan tabindex untuk item restoran
    card.setAttribute("tabindex", `${7 + index}`); // Urutan tab dimulai dari 7
    card.innerHTML = `
      <div class="image-container">
        <span class="location">Kota. ${restaurant.city}</span>
        <img src="${restaurant.pictureId}" alt="${restaurant.name || ""}">
      </div>
      <div class="card-content">
        <p class="rating">Rating: ${restaurant.rating}</p>
        <h2 class="restaurant-name">${restaurant.name}</h2>
        <p class="description">${restaurant.description}</p>
      </div>
    `;
    restaurantGrid.appendChild(card);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const navbarItems = [
    { text: "Home", href: "/" },
    { text: "Favourite", href: "#" },
    { text: "About Us", href: "https://github.com/chenjacky32" },
  ];

  const navbarMenu = document.querySelector(".nav-menu");
  const hamburgerItems = document.querySelector(".hamburger-items");

  navbarItems.forEach((item, index) => {
    const listItem = document.createElement("li");
    const linkItem = document.createElement("a");

    linkItem.href = item.href;
    linkItem.textContent = item.text;

    linkItem.setAttribute("tabIndex", `${index + 2}`);

    if (item.text === "About Us") {
      linkItem.target = "_blank";
    }

    listItem.appendChild(linkItem);
    navbarMenu.appendChild(listItem);

    const hamburgerListItem = document.createElement("li");
    const hamburgerLinkItem = document.createElement("a");
    hamburgerLinkItem.href = item.href;
    hamburgerLinkItem.textContent = item.text;

    hamburgerLinkItem.setAttribute("tabindex", `${index + 2}`);

    if (item.text === "About Us") {
      hamburgerLinkItem.target = "_blank";
    }

    hamburgerListItem.appendChild(hamburgerLinkItem);
    hamburgerItems.appendChild(hamburgerListItem);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.querySelector(".hamburger-menu");
  const mainContent = document.getElementById("mainContent");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    const isOpen = navMenu.classList.contains("active");

    hamburger.setAttribute("aria-expanded", isOpen);

    mainContent.setAttribute("aria-hidden", isOpen);

    if (isOpen) {
      navMenu.style.display = "block";
      hamburger.innerHTML = "&#x2715";
    } else {
      hamburger.innerHTML = "&#9776";
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 640) {
      navMenu.classList.remove("active");
      hamburger.innerHTML = "&#9776";
      navMenu.style.display = "none";
      mainContent.removeAttribute("aria-hidden");
    }
  });
});
