import { createLikeButtonTemplate, createUnlikeButtonTemplate } from '../views/templates/templates-creator';

const likeButtonPresenter = {
  async init({ likeButtonSection, favoriteRestaurants, restaurants }) {
    this._likeButtonSection = likeButtonSection;
    this._restaurants = restaurants;
    this._favoriteRestaurants = favoriteRestaurants;

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
    const restaurant = await this._favoriteRestaurants.getRestaurants(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonSection.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.putRestaurants(this._restaurants);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonSection.innerHTML = createUnlikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteRestaurants(this._restaurants.id);
      this._renderButton();
    });
  },
};

export default likeButtonPresenter;
