import ImageSlider from '../../../utils/image-slider';

class ListRestaurantsPresenter {
  constructor({ view, listRestaurants }) {
    this._view = view;
    this._listRestaurants = listRestaurants;

    this._init();
  }

  async _init() {
    this._initHeroSlider();
    await this._showListRestaurants();
  }

  _initHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    ImageSlider.init({ slides });
  }

  async _showListRestaurants() {
    try {
      const restaurants = await this._listRestaurants.listRestaurants();
      if (restaurants.length > 0) {
        this._displayListRestaurants(restaurants);
      } else {
        this._displayEmptyRestaurants();
      }
    } catch (error) {
      console.error(error.message);
      this._displayEmptyRestaurants();
    }
  }

  _displayListRestaurants(restaurants) {
    this._view.renderRestaurantsItems(restaurants);
  }

  _displayEmptyRestaurants() {
    this._view.renderEmptyRestaurants();
  }
}

export default ListRestaurantsPresenter;
