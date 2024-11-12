import { createItemTemplate } from '../templates/templates-creator';
import FavouriteRestaurantsIdb from '../../data/favourites-restaurant-idb';

const Favorite = {
  async render() {
    return `<article>
                <section class="favorites-section" aria-labelledby="favorites-title">
                  <h1 id="favorites-title" tabindex="1">Favorite Restaurants</h1>
                  <div class="favorites-grid">
                  </div>
                </section>
              </article>`;
  },
  async afterRender() {
    const mainContent = document.querySelector('.favorites-grid');
    const favoriteRestaurants = await FavouriteRestaurantsIdb.getAllRestaurants();
    favoriteRestaurants.forEach((restaurant) => {
      const restaurantCard = document.createElement('div');
      restaurantCard.classList.add('favorite-card');
      restaurantCard.innerHTML += createItemTemplate(restaurant);
      mainContent.appendChild(restaurantCard);
    });
  },
};

export default Favorite;
