const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/home');
});

Scenario('Showing empty liked restaurants in favorite page', ({ I }) => {
  // Navigasi ke halaman favorite
  I.amOnPage('/#/favorite');

  // Validasi bahwa tidak ada restoran favorit
  I.see('No Favorite restaurants found!', '.restaurant-item__not__found');
});

Scenario('Liking one restaurant', async ({ I }) => {
  // Pilih restoran pertama di halaman home
  I.seeElement('.restaurant-name a');
  const firstRestaurant = locate('.restaurant-name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  // Klik tombol like
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Navigasi ke halaman favorite
  I.amOnPage('/#/favorite');
  I.seeElement('.favorite-card');

  // Validasi bahwa restoran yang disukai ada di halaman favorite
  const likedRestaurantName = await I.grabTextFrom('.restaurant-name');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('Unliking one restaurant', async ({ I }) => {
  // Pilih restoran pertama di halaman home
  I.seeElement('.restaurant-name a');
  const firstRestaurant = locate('.restaurant-name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  // Klik tombol like
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Navigasi ke halaman favorite
  I.amOnPage('/#/favorite');
  I.seeElement('.favorite-card');

  // Validasi bahwa restoran yang disukai ada di halaman favorite
  const likedRestaurantName = await I.grabTextFrom('.restaurant-name');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  // Pilih restoran di halaman favorite untuk unlike
  I.click('.restaurant-name a');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Navigasi kembali ke halaman favorite dan validasi bahwa daftar kosong
  I.amOnPage('/#/favorite');
  I.see('No Favorite restaurants found!', '.restaurant-item__not__found');
});
