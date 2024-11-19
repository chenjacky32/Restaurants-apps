import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';

describe('Liking a Restaurant Items', () => {
  it('should show the like button when the restaurant item has not been liked before', async () => {
    document.body.innerHTML = '<div id="likeButtonSection"></div>';

    await LikeButtonInitiator.init({
      likeButtonSection: document.querySelector('#likeButtonSection'),
      restaurants: {
        id: 1,
      },
    });
    expect(document.querySelector('[aria-label="like this restaurants"]')).toBeTruthy();
  });
});
