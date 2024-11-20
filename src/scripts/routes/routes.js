import Detail from '../views/pages/detail';
import List from '../views/pages/list';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': List,
  '/home': List,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
