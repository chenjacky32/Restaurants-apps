const createItemTemplate = (items) => {
  return `
      <div class="image-container">
        <span class="location">Kota. ${items.city}</span>
        <img src="${items.pictureId}" alt="${items.name || ''}">
      </div>
      <div class="card-content">
        <p class="rating">Rating: ${items.rating}</p>
        <h2 class="restaurant-name">${items.name}</h2>
        <p class="description">${items.description}</p>
      </div>
    `;
};

const createItemDetailTemplate = (items) => {};

export { createItemTemplate, createItemDetailTemplate };
