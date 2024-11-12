import API_ENDPOINT from '../../globals/api-endpoints';

const getImageUrl = (pictureId) => `${API_ENDPOINT.IMAGE_MEDIUM(pictureId)}`;

const createItemTemplate = (items) => {
  const { city, pictureId, name, rating, id, description } = items;

  return `
      <div class="image-container">
        <span class="location">Kota. ${city}</span>
        <img src="${getImageUrl(pictureId)}" alt="${name || ''}">
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
            <div class="review">
              <p class="review-name">${review.name}</p>
              <p class="review-text">${review.review}</p>
              <p class="review-date">${review.date}</p>
            </div>`
    )
    .join('');

  return `<div class="restaurant-header">
      <img id="restaurant-image" src=${getImageUrl(pictureId)} alt="${name}">
      <div class="restaurant-info">
        <h1 id="restaurant-name">${name}</h1>
        <p id="restaurant-rating">Rating: ${rating}</p>
        <p id="restaurant-address">Alamat: ${address}</p>
        <p id="restaurant-city">Kota: ${city}</p>
      </div>
    </div>
    <p id="restaurant-description">${description}</p>

    <div class="menu-section">
      <h2>Menu Makanan</h2>
      <ul id="food-menu">
        ${foodMenu}
      </ul>
    </div>

    <div class="menu-section">
      <h2>Menu Minuman</h2>
      <ul id="drink-menu">
        ${drinkMenu}
      </ul>
    </div>

    <div class="reviews-section">
      <h2>Customer Reviews</h2>
      ${customerReview}
    </div>`;
};

export { createItemTemplate, createItemDetailTemplate };
