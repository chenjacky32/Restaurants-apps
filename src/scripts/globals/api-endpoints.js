import CONFIG from '../globals/config';

const API_ENDPOINT = {
  RESTAURANT_LIST: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  IMAGE_SMALL: (pictureId) => `${CONFIG.BASE_URL}/images/small/${pictureId}`,
  IMAGE_MEDIUM: (pictureId) => `${CONFIG.BASE_URL}/images/medium/${pictureId}`,
  IMAGE_LARGE: (pictureId) => `${CONFIG.BASE_URL}/images/large/${pictureId}`,
};

export default API_ENDPOINT;
