import likeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavouriteRestaurantsIdb from '../../src/scripts/data/favourites-restaurant-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurants) => {
  await likeButtonPresenter.init({
    likeButtonSection: document.querySelector('#likeButtonSection'),
    favoriteRestaurants: FavouriteRestaurantsIdb,
    restaurants,
  });
};

export { createLikeButtonPresenterWithRestaurant };
