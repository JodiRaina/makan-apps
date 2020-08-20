import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantsItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Restaurant</h2>
        <div id="restaurants" class="restaurants">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    console.log(restaurants);
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantsItemTemplate(restaurant);
    });
    if (restaurants.length == 0) {
      restaurantsContainer.innerHTML = `
      <div class="no__restaurant">
        <p>tidak ada restaurant yang favorite</p>
      </div>`;
    }
  },
};

export default Like;
