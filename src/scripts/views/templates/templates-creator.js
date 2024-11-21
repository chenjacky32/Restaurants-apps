import API_ENDPOINT from '../../globals/api-endpoints';

const getImageUrlSmall = (pictureId) => `${API_ENDPOINT.IMAGE_SMALL(pictureId)}?v=${Date.now}`;
const getImageUrlMedium = (pictureId) => `${API_ENDPOINT.IMAGE_MEDIUM(pictureId)}?v=${Date.now}`;
const getImageUrlLarge = (pictureId) => `${API_ENDPOINT.IMAGE_LARGE(pictureId)}?v=${Date.now}`;

const createItemTemplate = (items) => {
  const { city, pictureId, name, rating, id, description } = items;

  return `
      <div class="image-container">
        <span class="location">Kota. ${city}</span>
          <picture>
            <source media="(max-width: 768px)" type="image/webp" srcset="${getImageUrlSmall(pictureId)}">
            <source media="(max-width: 768px)" type="image/jpeg" srcset="${getImageUrlSmall(pictureId)}">
            <source media="(max-width: 1024px)" type="image/webp" srcset="${getImageUrlMedium(pictureId)}">
            <source media="(max-width: 1024px)" type="image/jpeg" srcset="${getImageUrlMedium(pictureId)}">
            <img class="lazyload" data-src="${getImageUrlLarge(pictureId)}" alt="${name || ''}">
          </picture>
      </div>
      <div class="card-content">
        <p class="rating">Rating: ${rating}</p>
        <h2 class="restaurant-name"><a href="#/detail/${id}">${name}</a></h2>
        <p class="description">${description}</p>
      </div>
    `;
};

const createItemDetailTemplate = (items) => {
  const {
    name,
    description,
    city,
    address,
    pictureId,
    menus: { foods, drinks },
    rating,
    customerReviews,
  } = items;

  const foodMenu = foods.map((food) => `<li>${food.name}</li>`).join('');
  const drinkMenu = drinks.map((drink) => `<li>${drink.name}</li>`).join('');
  const customerReview = customerReviews
    .map(
      (review) => `
            <div class="review" tabindex="0">
              <p class="review-name">${review.name}</p>
              <p class="review-text">${review.review}</p>
              <p class="review-date">${review.date}</p>
            </div>`
    )
    .join('');

  return `<div class="restaurant-header" tabindex="0">
      <picture>
        <source media="(max-width: 768px)" type="image/webp" srcset="${getImageUrlSmall(pictureId)}">
        <source media="(max-width: 768px)" type="image/jpeg" srcset="${getImageUrlSmall(pictureId)}">
        <source media="(max-width: 1024px)" type="image/webp" srcset="${getImageUrlMedium(pictureId)}">
        <source media="(max-width: 1024px)" type="image/jpeg" srcset="${getImageUrlMedium(pictureId)}">
        <img class="lazyload" id="restaurant-image" data-src="${getImageUrlLarge(pictureId)}" alt="${name}" tabindex="0">
      </picture>
      <div class="restaurant-info" tabindex="0">
        <h1 id="restaurant-name">${name}</h1>
        <p id="restaurant-rating">Rating: ${rating}</p>
        <p id="restaurant-address">Alamat: ${address}</p>
        <p id="restaurant-city">Kota: ${city}</p>
      </div>
    </div>
    <p id="restaurant-description" tabindex="0">${description}</p>

    <div class="menu-section">
      <h2>Menu Makanan</h2>
      <ul id="food-menu" tabindex="0">
        ${foodMenu}
      </ul>
    </div>

    <div class="menu-section">
      <h2>Menu Minuman</h2>
      <ul id="drink-menu" tabindex="0">
        ${drinkMenu}
      </ul>
    </div>

    <div class="reviews-section">
      <h2>Customer Reviews</h2>
      ${customerReview}
    </div>`;
};

const createLikeButtonTemplate = () => {
  return `<button aria-label="like this restaurants" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;
};

const createUnlikeButtonTemplate = () => {
  return `<button aria-label="unlike this restaurants" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
};

export { createItemTemplate, createItemDetailTemplate, createLikeButtonTemplate, createUnlikeButtonTemplate };
