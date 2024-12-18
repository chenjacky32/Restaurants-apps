import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute, Route } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST);

const restaurantApi = new Route(
  ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev'),
  new StaleWhileRevalidate({
    cacheName: 'restaurant_data',
  })
);

const restaurantImageApi = new Route(
  ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/images/medium'),
  new StaleWhileRevalidate({
    cacheName: 'restaurant_data_image',
  })
);

registerRoute(restaurantApi);
registerRoute(restaurantImageApi);

self.addEventListener('install', () => {
  console.log('Service Worker Installed');
  self.skipWaiting();
});

self.addEventListener('push', () => {
  console.log('Push Notification Received');
  self.skipWaiting();
});
