import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class TheRestaurantDbSource {
  static async getRestaurants() {
    const response = await fetch(API_ENDPOINT.NOW_PLAYING);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async addReview(data) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Auth-Token': CONFIG.API_KEY },
      body: JSON.stringify(data),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    return response;
  }
}

export default TheRestaurantDbSource;
