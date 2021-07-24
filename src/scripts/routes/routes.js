/* eslint linebreak-style: ["error", "windows"] */
import HomeResto from '../views/pages/home-resto';
import DetailResto from '../views/pages/detail-resto';
import Like from '../views/pages/favorite-resto';

const routes = {
  '/': HomeResto, // default page
  '/home-resto': HomeResto,
  '/detail-resto/:id': DetailResto,
  '/favorite-resto': Like,

};

export default routes;
