import RestaurantSource from '../../data/restaurant-source';
import ListRestaurantsView from './list-restaurants/list-restaurants-view';
import ListRestaurantsPresenter from './list-restaurants/list-restaurants-presenter';

const view = new ListRestaurantsView();

const List = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new ListRestaurantsPresenter({ view, listRestaurants: RestaurantSource });
  },
};

export default List;
