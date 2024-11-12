import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import likeButtonInitiator from '../../utils/like-button-initiator';
import { createItemDetailTemplate, createLikeButtonTemplate, createLikedButtonTemplate } from '../templates/templates-creator';

const Detail = {
  async render() {
    return `<section class="restaurant-detail">
        </section>
        <section id="likeButtonSection">
        </section>
        `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurants(url.id);
    const restaurantContainer = document.querySelector('.restaurant-detail');

    likeButtonInitiator.init({
      likeButtonSection: document.querySelector('#likeButtonSection'),
      restaurants: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        address: restaurant.address,
        pictureId: restaurant.pictureId,
      },
    });
    restaurantContainer.innerHTML = createItemDetailTemplate(restaurant);
    likeButtonSection.innerHTML = createLikeButtonTemplate();
  },
};

export default Detail;
