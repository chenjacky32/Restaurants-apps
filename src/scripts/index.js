import 'regenerator-runtime';
import '../styles/main.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  content: document.querySelector('#mainContent'),
  hamburger: document.getElementById('hamburger'),
  navMenu: document.querySelector('.hamburger-menu'),
  mainContent: document.getElementById('mainContent'),
  restaurantTitle: document.getElementById('restaurant-title'),
  navbarMenu: document.querySelector('.nav-menu'),
  hamburgerItems: document.querySelector('.hamburger-items'),
  navbarItems: [
    { text: 'Home', href: '#/home' },
    { text: 'Favourite', href: '#/favorite' },
    { text: 'About Us', href: 'https://github.com/chenjacky32' },
  ],
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
