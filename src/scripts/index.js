import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../scripts/roots";

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
