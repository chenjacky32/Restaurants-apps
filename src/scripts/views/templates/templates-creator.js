import API_ENDPOINT from '../../globals/api-endpoints';

const createItemTemplate = (items) => {
  const getImageUrl = API_ENDPOINT.IMAGE_MEDIUM(items.pictureId);

  return `
      <div class="image-container">
        <span class="location">Kota. ${items.city}</span>
        <img src="${getImageUrl}" alt="${items.name || ''}">
      </div>
      <div class="card-content">
        <p class="rating">Rating: ${items.rating}</p>
        <h2 class="restaurant-name"><a href="#/detail/${items.id}">${items.name}</a></h2>
        <p class="description">${items.description}</p>
      </div>
    `;
};

const createItemDetailTemplate = (items) => {};

export { createItemTemplate, createItemDetailTemplate };
