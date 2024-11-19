import { itActsAsFavoriteRestaurantModel } from './contracts/favoriteRestaurantContract';
import FavouriteRestaurantsIdb from '../src/scripts/data/favourites-restaurant-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavouriteRestaurantsIdb.getAllRestaurants()).forEach(async (restaurant) => {
      await FavouriteRestaurantsIdb.deleteRestaurants(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavouriteRestaurantsIdb);
});
