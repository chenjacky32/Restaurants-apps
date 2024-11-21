import { createItemTemplate } from '../templates/templates-creator';
import FavouriteRestaurantsIdb from '../../data/favourites-restaurant-idb';
import FavoriteRestaurantsPresenter from './liked-restaurants/favorite-restaurants-presenter';
import FavoriteRestaurantView from './liked-restaurants/favorite-restaurants-view';

const view = new FavoriteRestaurantView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },
  async afterRender() {
    new FavoriteRestaurantsPresenter({ view, favoriteRestaurants: FavouriteRestaurantsIdb });
  },
};

export default Favorite;
