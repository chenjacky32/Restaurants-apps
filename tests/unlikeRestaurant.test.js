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
});
