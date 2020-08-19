import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantsItemTemplate } from '../templates/template-creator';

const allRestaurant = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Explore Restaurants</h2>
        <div id="restaurants" class="restaurants">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await TheRestaurantDbSource.getRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantsItemTemplate(restaurant);
    });
  },
};

export default allRestaurant;
