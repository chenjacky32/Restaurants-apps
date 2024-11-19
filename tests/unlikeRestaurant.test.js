import likeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavouriteRestaurantsIdb from '../src/scripts/data/favourites-restaurant-idb';

describe('Unliking a Restaurant Items', () => {
  const addLikeButtonSection = () => {
    document.body.innerHTML = '<div id="likeButtonSection"></div>';
  };

  beforeEach(async () => {
    addLikeButtonSection();
    await FavouriteRestaurantsIdb.putRestaurants({ id: 1 });
  });

  afterEach(async () => {
    await FavouriteRestaurantsIdb.deleteRestaurants(1);
  });

  it('should display unlike widget when the restaurant item has been liked', async () => {
    await likeButtonInitiator.init({
      likeButtonSection: document.querySelector('#likeButtonSection'),
      restaurants: {
        id: 1,
      },
    });
    expect(document.querySelector('[aria-label="unlike this restaurants"]')).toBeTruthy();
  });

  it('should not display like when the restaurant item has been liked', async () => {
    await likeButtonInitiator.init({
      likeButtonSection: document.querySelector('#likeButtonSection'),
      restaurants: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="like this restaurants"]')).toBeFalsy();
  });

  it('should be able to remove liked restaurant item from the list', async () => {
    await likeButtonInitiator.init({
      likeButtonSection: document.querySelector('#likeButtonSection'),
      restaurants: {
        id: 1,
      },
    });
    document.querySelector('[aria-label="unlike this restaurants"]').dispatchEvent(new Event('click'));
    expect(await FavouriteRestaurantsIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error when user click unlike widget if the unliked restaurant item is not in the list', async () => {
    await likeButtonInitiator.init({
      likeButtonSection: document.querySelector('#likeButtonSection'),
      restaurants: {
        id: 1,
      },
    });

    // Hapus item restoran dari list favourite
    await FavouriteRestaurantsIdb.deleteRestaurants(1);

    //simulasi user menekan widget unlike
    document.querySelector('[aria-label="unlike this restaurants"]').dispatchEvent(new Event('click'));
    expect(await FavouriteRestaurantsIdb.getAllRestaurants()).toEqual([]);
  });
});
