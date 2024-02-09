import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const assetsToCache = [
  './',
  './icons/icon-144x144.png',
  './icons/maskable_icon_x48.png',
  './icons/maskable_icon_x72.png',
  './icons/maskable_icon_x96.png',
  './icons/maskable_icon_x128.png',
  './icons/maskable_icon_x192.png',
  './icons/maskable_icon_x384.png',
  './icons/maskable_icon_x512.png',
  './icons/maskable_icon.png',
  './images/alfito-photo.png',
  './images/almond.png',
  './images/bagas-photo.png',
  './images/blueberries.png',
  './images/blueberry-1.png',
  './images/blueberry.png',
  './images/chicken-1.png',
  './images/chicken.png',
  './images/hero.jpg',
  './images/honey.png',
  './images/one-blueberry.png',
  './images/peach.png',
  './images/round-bread.png',
  './images/salsa-photo.png',
  './images/teguh-photo.png',
  './images/two-bluerries.png',
  './app.webmanifest',
  './favicon.png',
  './app.bundle.js',
  './app.css',
  './sw.bundle.js',
  './index.html',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
