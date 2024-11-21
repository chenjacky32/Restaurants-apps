import { createItemTemplate } from '../../templates/templates-creator';

class ListRestaurantsView {
  getTemplate() {
    return `
        <article>
            <section class="hero-section" aria-labelledby="hero-title">
            <div class="hero-group">
                <div class="container-image">
                <div class="hero-content">
                    <h1 tabindex="0">Find Your Favorite Restaurant Here!</h1>
                    <p tabindex="0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorem fugit praesentium harum possimus, aliquam explicabo ex veniam architecto illo officia nostrum ipsa aspernatur eligendi aliquid obcaecati deleniti,
                    omnis provident!
                    </p>
                </div>
                <div class="slide slide1"></div>
                <div class="slide slide2"></div>
                <div class="slide slide3"></div>
                </div>
            </div>
            </section>
            <section class="item-section" aria-labelledby="restaurant-title">
            <h1 id="restaurant-title" tabindex="0">List Restaurant</h1>
            <div class="restaurant-grid" id="restaurantGrid" tabindex="0"></div>
            </section>
        </article>
    `;
  }

  renderRestaurantsItems(restaurant) {
    const restaurantGrid = document.querySelector('#restaurantGrid');
    restaurant.forEach((restaurant, index) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.setAttribute('tabindex', '0');

      card.innerHTML = this._renderItemTemplate(restaurant);
      restaurantGrid.appendChild(card);
    });
  }

  _renderItemTemplate(restaurant) {
    return createItemTemplate(restaurant);
  }

  renderEmptyRestaurants() {
    const itemSection = document.querySelector('.item-section');
    itemSection.insertAdjacentHTML('beforeend', this._getEmptyRestaurantTemplate());
  }

  _getEmptyRestaurantTemplate() {
    return `<p class="empty-message">No restaurants found!</p>`;
  }
}

export default ListRestaurantsView;
