import { createItemTemplate } from '../../templates/templates-creator';

class FavoriteRestaurantsView {
  getTemplate() {
    return `<article>
                <section class="favorites-section" aria-labelledby="favorites-title">
                  <h1 id="favorites-title" tabindex="1">Favorite Restaurants</h1>
                  <div class="favorites-grid">
                  </div>
                </section>
              </article>`;
  }

  showFavoriteRestaurants(restaurants) {
    const favoritesGrid = document.querySelector('.favorites-grid');
    const favoriteSection = document.querySelector('.favorites-section');
    favoritesGrid.innerHTML = '';

    if (restaurants.length > 0) {
      this._renderFavoriteRestaurantsCards(restaurants, favoritesGrid);
    } else {
      favoriteSection.insertAdjacentHTML('beforeend', this._getEmptyRestaurantTemplate());
    }
  }

  _renderFavoriteRestaurantsCards(restaurants, favoritesGrid) {
    restaurants.forEach((items) => {
      const restaurantCard = document.createElement('div');
      restaurantCard.classList.add('favorite-card');
      restaurantCard.innerHTML = createItemTemplate(items);
      favoritesGrid.appendChild(restaurantCard);
    });
  }

  _getEmptyRestaurantTemplate() {
    return `<p class="restaurant-item__not__found">No Favorite restaurants found!</p>`;
  }
}

export default FavoriteRestaurantsView;
