Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/home');
});

Scenario('Showing empty liked restaurants', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.see('No Favorite restaurants found!', '.restaurant-item__not__found');
});
