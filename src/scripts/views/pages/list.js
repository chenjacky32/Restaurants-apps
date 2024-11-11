import { createItemTemplate } from '../templates/templates-creator';
import ImageSlider from '../../utils/image-slider';

const listRestaurants = [
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

const List = {
  async render() {
    return `<article>
        <section class="hero-section" aria-labelledby="hero-title">
          <div class="hero-group">
            <div class="container-image">
              <div class="hero-content">
                <h1 tabindex="4">Find Your Favorite Restaurant Here!</h1>
                <p tabindex="5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorem fugit praesentium harum possimus, aliquam explicabo ex veniam architecto illo officia nostrum ipsa aspernatur eligendi aliquid obcaecati deleniti,
                  omnis provident!
                </p>
              </div>
              <div class="slide slide1"></div>
              <div class="slide slide2"></div>
              <div class="slide slide3"></div>
            </div>
          </div>
        </section>
        <section class="item-section" aria-labelledby="restaurant-title">
          <h1 id="restaurant-title" tabindex="6">List Restaurant</h1>
          <div class="restaurant-grid" id="restaurantGrid"></div>
        </section>
      </article>`;
  },
  async afterRender() {
    const slides = document.querySelectorAll('.slide');
    ImageSlider.init({ slides });

    const restaurantGrid = document.querySelector('#restaurantGrid');
    listRestaurants.forEach((restaurant, index) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.setAttribute('tabindex', `${7 + index}`);
      card.innerHTML += createItemTemplate(restaurant);
      restaurantGrid.appendChild(card);
    });
  },
};

export default List;
