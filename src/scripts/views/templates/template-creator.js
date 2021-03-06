import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="lazyload restaurant__poster" data-src="${
    CONFIG.BASE_URL + CONFIG.BASE_IMAGE_URL + restaurant.pictureId
  }" alt="${restaurant.name}" />
  <div class="restaurant__info">
  <h3>Information</h3>
    <h4>Rating</h4>
    <p>⭐️${restaurant.rating}</p>
    <h4>Kota</h4>
    <p>${restaurant.city}</p>
    <h4>Alamat</h4>
    <p>${restaurant.address}</p>
    <h4>Kategori Menu</h4>
    <p>${restaurant.categories.map((obj) => Object.values(obj))}</p>
    <h4>Menu Makanan</h4>
    <p>${restaurant.menus.foods.map((obj) => Object.values(obj))}</p>
    <h4>Menu Minuman</h4>
    <p>${restaurant.menus.drinks.map((obj) => Object.values(obj))}</p>
  </div>
  <h3>Review</h3>
</div>
`;

const createRestaurantsReviewTemplate = (review) => `
  <div class="card">
    <div class="container__review">
      <h4><b>${review.name}</b></h4> 
      <p>${review.date}</p> 
      <p>${review.review}</p> 
    </div>
  </div>
`;
const createRestaurantsItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img class="lazyload restaurant-item__header__poster" alt="${restaurant.name}"
            data-src="${CONFIG.BASE_URL + CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">${
              restaurant.rating
            }</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <p>${restaurant.description}</p>
    </div>
  </div>
  `;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantsItemTemplate,
  createRestaurantDetailTemplate,
  createRestaurantsReviewTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
