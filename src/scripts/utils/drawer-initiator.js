// utils/DrawerInitiator.js

const DrawerInitiator = {
  init({ hamburger, navMenu, mainContent }) {
    this.hamburger = hamburger;
    this.navMenu = navMenu;
    this.mainContent = mainContent;

    this.hamburger.addEventListener('click', this._toggleDrawer.bind(this));
    window.addEventListener('resize', this._handleResize.bind(this));
  },

  _toggleDrawer() {
    const isOpen = this.navMenu.classList.toggle('active');
    this.hamburger.setAttribute('aria-expanded', isOpen);
    this.mainContent.setAttribute('aria-hidden', isOpen);
    this.navMenu.style.display = isOpen ? 'block' : 'none';
    this.hamburger.innerHTML = isOpen ? '&#x2715' : '&#9776';
  },

  _handleResize() {
    if (window.innerWidth > 640) {
      this.navMenu.classList.remove('active');
      this.hamburger.innerHTML = '&#9776';
      this.navMenu.style.display = 'none';
      this.mainContent.removeAttribute('aria-hidden');
    }
  },
};

export default DrawerInitiator;
