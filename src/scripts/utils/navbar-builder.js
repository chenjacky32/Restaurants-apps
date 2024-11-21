const NavbarMenuBuilder = {
  init({ navbarItems, navbarMenu, hamburgerItems }) {
    this._renderNavItems(navbarItems, navbarMenu);
    this._renderHamburgerItems(navbarItems, hamburgerItems);
  },

  _renderNavItems(navbarItems, navbarMenu) {
    navbarItems.forEach((item, index) => {
      const listItem = document.createElement('li');
      const linkItem = document.createElement('a');
      linkItem.href = item.href;
      linkItem.textContent = item.text;

      if (item.text === 'About Us') linkItem.target = '_blank';

      listItem.appendChild(linkItem);
      navbarMenu.appendChild(listItem);
    });
  },

  _renderHamburgerItems(navbarItems, hamburgerItems) {
    navbarItems.forEach((item, index) => {
      const listItem = document.createElement('li');
      const linkItem = document.createElement('a');
      linkItem.href = item.href;
      linkItem.textContent = item.text;

      if (item.text === 'About Us') linkItem.target = '_blank';

      listItem.appendChild(linkItem);
      hamburgerItems.appendChild(listItem);
    });
  },
};

export default NavbarMenuBuilder;
