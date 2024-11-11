import { createItemTemplate } from '../templates/templates-creator';

const favoriteRestaurants = [
  {
    id: 'rqdv5juczeskfw1e867',
    name: 'Melting Pot',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ...',
    pictureId: '14',
    city: 'Medan',
    rating: 4.2,
  },
  {
    id: 's1knt6za9kkfw1e867',
    name: 'Kafe Kita',
    description: 'Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ...',
    pictureId: '25',
    city: 'Gorontalo',
    rating: 4,
  },
  {
    id: 'rqdv5juczeskfw1e867',
    name: 'Melting Pot',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ...',
    pictureId: '14',
    city: 'Medan',
    rating: 4.2,
  },
  {
    id: 's1knt6za9kkfw1e867',
    name: 'Kafe Kita',
    description: 'Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ...',
    pictureId: '25',
    city: 'Gorontalo',
    rating: 4,
  },
  {
    id: 'rqdv5juczeskfw1e867',
    name: 'Melting Pot',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ...',
    pictureId: '14',
    city: 'Medan',
    rating: 4.2,
  },
  {
    id: 's1knt6za9kkfw1e867',
    name: 'Kafe Kita',
    description: 'Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ...',
    pictureId: '25',
    city: 'Gorontalo',
    rating: 4,
  },
  // Add more favorites as needed
];

const Favorite = {
  async render() {
    return `<article>
                <section class="favorites-section" aria-labelledby="favorites-title">
                  <h1 id="favorites-title" tabindex="1">Favorite Restaurants</h1>
                  <div class="favorites-grid">
                  </div>
                </section>
              </article>`;
  },
  async afterRender() {
    const mainContent = document.querySelector('.favorites-grid');
    favoriteRestaurants.forEach((restaurant) => {
      const restaurantCard = document.createElement('div');
      restaurantCard.classList.add('favorite-card');
      restaurantCard.innerHTML += createItemTemplate(restaurant);
      mainContent.appendChild(restaurantCard);
    });
  },
};

export default Favorite;
