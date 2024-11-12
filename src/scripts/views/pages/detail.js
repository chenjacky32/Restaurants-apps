import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { createItemDetailTemplate } from '../templates/templates-creator';

const Detail = {
  async render() {
    return `<section class="restaurant-detail">
        </section>`;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurants(url.id);
    const restaurantContainer = document.querySelector('.restaurant-detail');
    restaurantContainer.innerHTML += createItemDetailTemplate(restaurant);
  },
};

export default Detail;
