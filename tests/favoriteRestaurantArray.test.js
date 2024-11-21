import { itActsAsFavoriteRestaurantModel } from './contracts/favoriteRestaurantContract';

let favoriteRestaurants = [];

const favoriteRestaurantArray = {
  getRestaurants(id) {
    if (!id) {
      return;
    }
    return favoriteRestaurants.find((retaurant) => retaurant.id === id);
  },

  getAllRestaurants() {
    return favoriteRestaurants;
  },

  putRestaurants(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    if (this.getRestaurants(restaurant.id)) {
      return;
    }
    favoriteRestaurants.push(restaurant);
  },

  deleteRestaurants(id) {
    favoriteRestaurants = favoriteRestaurants.filter((restaurant) => restaurant.id !== id);
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => {
    favoriteRestaurants = [];
  });

  itActsAsFavoriteRestaurantModel(favoriteRestaurantArray);
});
