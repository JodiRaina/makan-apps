import UrlParser from '../../routes/url-parser';
import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import {
  createRestaurantDetailTemplate,
  createRestaurantsReviewTemplate,
} from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant">
      </div>
      <div class="restaurant" id="restaurantReview">
      </div>
      <div class="restaurant">
      <form action="#/review" method="POST">
        <h4>Tambahkan Review<h4>
          Name <input type="text" placeholder="Nama Lengkap" id="nama"/>
          Message <input type="textarea" placeholder="Komentar" id="review"/>
          <input type="submit" value="Send" id="submitReview"/>
        </form>
      </div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheRestaurantDbSource.detailRestaurant(url.id);
    const reviews = restaurant.consumerReviews;
    const restaurantContainer = document.querySelector('#restaurant');
    const restaurantReviewContainer = document.querySelector('#restaurantReview');
    const btnSubmit = document.querySelector('#submitReview');
    btnSubmit.addEventListener('click', () => {
      const name = document.querySelector('#nama').value;
      const review = document.querySelector('#review').value;
      const data = {
        id: url.id,
        name,
        review,
      };
      TheRestaurantDbSource.addReview(data);
    });
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    reviews.forEach((review) => {
      restaurantReviewContainer.innerHTML += createRestaurantsReviewTemplate(review);
    });
    await LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      FavoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        rating: restaurant.rating,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        categories: restaurant.categories,
        menus: restaurant.menus,
        consumerReviews: restaurant.consumerReviews,
      },
    });
  },
};

export default Detail;
