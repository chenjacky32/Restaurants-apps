import likeButtonInitiator from '../../src/scripts/utils/like-button-initiator';

const createLikeButtonPresenterWithRestaurant = async (restaurants) => {
  await likeButtonInitiator.init({
    likeButtonSection: document.querySelector('#likeButtonSection'),
    restaurants,
  });
};

export { createLikeButtonPresenterWithRestaurant };
