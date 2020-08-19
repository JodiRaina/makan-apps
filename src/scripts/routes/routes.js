import Restaurant from '../views/pages/restaurant';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';
import AddReview from '../data/therestaurantdb-source';

const routes = {
  '/': Restaurant,
  '/restaurant': Restaurant,
  '/detail/:id': Detail,
  '/like': Like,
  '/review': AddReview.addReview,
};

export default routes;
