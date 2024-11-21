class FavoriteRestaurantsPresenter {
  constructor({ view, favoriteRestaurants }) {
    this._view = view;
    this._favoriteRestaurants = favoriteRestaurants;

    this._showFavoriteRestaurants();
  }

  async _showFavoriteRestaurants() {
    const favoriteRestaurants = await this._favoriteRestaurants.getAllRestaurants();
    this._displayFavoriteRestaurants(favoriteRestaurants);
  }

  _displayFavoriteRestaurants(restaurants) {
    this._view.showFavoriteRestaurants(restaurants);
  }
}

export default FavoriteRestaurantsPresenter;
