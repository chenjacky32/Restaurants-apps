const TabIndexManager = {
  init({ hamburger, restaurantTitle }) {
    this.hamburger = hamburger;
    this.restaurantTitle = restaurantTitle;
    this.updateTabindex();
    window.addEventListener('resize', this.updateTabindex.bind(this));
  },

  updateTabindex() {
    const isMobile = window.innerWidth <= 640;

    if (this.hamburger) {
      this.hamburger.setAttribute('tabindex', isMobile ? '3' : '-1');
    }

    if (this.restaurantTitle) {
      this.restaurantTitle.setAttribute('tabindex', isMobile ? '4' : '5');
    }
  },
};

export default TabIndexManager;
