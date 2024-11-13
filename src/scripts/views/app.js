import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import DrawerInitiator from '../utils/drawer-initiator';
import TabIndexManager from '../utils/tab-index-manager';
import NavbarMenuBuilder from '../utils/navbar-builder';

class App {
  constructor({ content, hamburger, navMenu, mainContent, restaurantTitle, navbarMenu, hamburgerItems, navbarItems }) {
    this._content = content;
    this._hamburger = hamburger;
    this._navMenu = navMenu;
    this._mainContent = mainContent;
    this._restaurantTitle = restaurantTitle;
    this._navbarMenu = navbarMenu;
    this._hamburgerItems = hamburgerItems;
    this._navbarItems = navbarItems;

    this._initialAppShell();
  }

  _initialAppShell() {
    NavbarMenuBuilder.init({
      navbarItems: this._navbarItems,
      navbarMenu: this._navbarMenu,
      hamburgerItems: this._hamburgerItems,
    });

    DrawerInitiator.init({
      hamburger: this._hamburger,
      navMenu: this._navMenu,
      mainContent: this._mainContent,
    });

    TabIndexManager.init({
      hamburger: this._hamburger,
      restaurantTitle: this._restaurantTitle,
    });

    this.renderPage();
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    const skipLink = document.querySelector('.skip-to-content');
    skipLink.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#maincontent').focus();
    });
  }
}

export default App;
