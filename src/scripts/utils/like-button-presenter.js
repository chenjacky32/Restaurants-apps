import FavouriteRestaurantsIdb from '../data/favourites-restaurant-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/templates-creator';

const likeButtonPresenter = {
  async init({ likeButtonSection, restaurants }) {
    this._likeButtonSection = likeButtonSection;
    this._restaurants = restaurants;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurants;

    if (await this._isItemExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isItemExist(id) {
    const restaurant = await FavouriteRestaurantsIdb.getRestaurants(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonSection.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavouriteRestaurantsIdb.putRestaurants(this._restaurants);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonSection.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavouriteRestaurantsIdb.deleteRestaurants(this._restaurants.id);
      this._renderButton();
    });
  },
};

export default likeButtonPresenter;
