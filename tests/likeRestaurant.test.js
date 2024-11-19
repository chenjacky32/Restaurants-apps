import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavouriteRestaurantsIdb from '../src/scripts/data/favourites-restaurant-idb';

describe('Liking a Restaurant Items', () => {
  const addLikeButtonSection = () => {
    document.body.innerHTML = '<div id="likeButtonSection"></div>';
  };

  beforeEach(() => {
    addLikeButtonSection();
  });

  it('should show the like button when the restaurant item has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonSection: document.querySelector('#likeButtonSection'),
      restaurants: {
        id: 1,
      },
    });
    expect(document.querySelector('[aria-label="like this restaurants"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant item has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonSection: document.querySelector('#likeButtonSection'),
      restaurants: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="unlike this restaurants"]')).toBeFalsy();
  });
});
