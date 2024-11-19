import FavouriteRestaurantsIdb from '../src/scripts/data/favourites-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking a Restaurant Items', () => {
  const addLikeButtonSection = () => {
    document.body.innerHTML = '<div id="likeButtonSection"></div>';
  };

  beforeEach(() => {
    addLikeButtonSection();
  });

  it('should show the like button when the restaurant item has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    expect(document.querySelector('[aria-label="like this restaurants"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant item has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    expect(document.querySelector('[aria-label="unlike this restaurants"]')).toBeFalsy();
  });

  it('should be able to like the restaurant item', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    //mengecek item restoran berhasil di-like
    const restaurantItem = await FavouriteRestaurantsIdb.getRestaurants(1);
    expect(restaurantItem).toEqual({ id: 1 });

    await FavouriteRestaurantsIdb.deleteRestaurants(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    await FavouriteRestaurantsIdb.putRestaurants({ id: 1 });

    //mengecek item restoran berhasil di-like
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    //tidak ada item restoran yang ganda
    expect(await FavouriteRestaurantsIdb.getAllRestaurants()).toEqual([{ id: 1 }]);
    await FavouriteRestaurantsIdb.deleteRestaurants(1);
  });

  it('should not add a restaurant item when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavouriteRestaurantsIdb.getAllRestaurants()).toEqual([]);
  });
});
