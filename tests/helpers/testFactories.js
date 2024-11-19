import likeButtonPresenter from '../../src/scripts/utils/like-button-presenter';

const createLikeButtonPresenterWithRestaurant = async (restaurants) => {
  await likeButtonPresenter.init({
    likeButtonSection: document.querySelector('#likeButtonSection'),
    restaurants,
  });
};

export { createLikeButtonPresenterWithRestaurant };
