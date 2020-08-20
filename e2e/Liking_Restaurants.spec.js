const assert = require('assert');

Feature('Liking Restaurants');

Scenario('liking one restaurant', (I) => {
  I.amOnPage('/');

  I.seeElement('.restaurant-item__content a');
  I.click(locate('.restaurant-item__content a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');
});

Scenario('unliking one restaurant', (I) => {
  I.amOnPage('/');

  I.seeElement('.restaurant-item__content a');
  I.click(locate('.restaurant-item__content a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');

  const firstRestaurant = locate('.restaurant-item__content a').first();
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.no__restaurant p');
});
