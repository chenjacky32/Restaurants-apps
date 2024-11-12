import { createItemTemplate } from '../templates/templates-creator';
import ImageSlider from '../../utils/image-slider';
import RestaurantSource from '../../data/restaurant-source';

const List = {
  async render() {
    return `<article>
        <section class="hero-section" aria-labelledby="hero-title">
          <div class="hero-group">
            <div class="container-image">
              <div class="hero-content">
                <h1 tabindex="4">Find Your Favorite Restaurant Here!</h1>
                <p tabindex="5">
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
          <h1 id="restaurant-title" tabindex="6">List Restaurant</h1>
          <div class="restaurant-grid" id="restaurantGrid"></div>
        </section>
      </article>`;
  },
  async afterRender() {
    const slides = document.querySelectorAll('.slide');
    ImageSlider.init({ slides });
    const restaurantData = await RestaurantSource.listRestaurants();
    const restaurantGrid = document.querySelector('#restaurantGrid');
    restaurantData.forEach((restaurant, index) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.setAttribute('tabindex', `${7 + index}`);
      card.innerHTML += createItemTemplate(restaurant);
      restaurantGrid.appendChild(card);
    });
  },
};

export default List;
