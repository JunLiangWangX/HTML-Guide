/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "063327e851504488be15b6750a358bbb"
  },
  {
    "url": "assets/css/0.styles.f279af35.css",
    "revision": "61aa8b2ff1290be6576b0934293ceaab"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3e56980c.js",
    "revision": "b4588cfa07ff58e10249f0fcd42e3a7a"
  },
  {
    "url": "assets/js/11.20d87d9b.js",
    "revision": "c40da23cfa35aacc0294059b71d7eaf9"
  },
  {
    "url": "assets/js/2.1340232b.js",
    "revision": "8f0d0062b1578567d9c2a66420145a73"
  },
  {
    "url": "assets/js/3.761c7fee.js",
    "revision": "276e8b6ffbbed11b7df499ded561254b"
  },
  {
    "url": "assets/js/4.9ef97cf5.js",
    "revision": "7cd0d5020d8734fc4f8f18c4392cb8b9"
  },
  {
    "url": "assets/js/5.d36c4cd0.js",
    "revision": "17c4d5405a9c765d520eee69c6d32449"
  },
  {
    "url": "assets/js/6.454c123d.js",
    "revision": "802b5b7c3b6fbb3aae84b6ff00d1426d"
  },
  {
    "url": "assets/js/7.db05d4b4.js",
    "revision": "a01b491f2ad961c07afc6dc99550858d"
  },
  {
    "url": "assets/js/8.6028b21f.js",
    "revision": "c9907f71b4a3cc05bd7fb55229a52054"
  },
  {
    "url": "assets/js/9.775dec50.js",
    "revision": "f997ea466176d8ffad6b490fef4fb099"
  },
  {
    "url": "assets/js/app.2b3dcd76.js",
    "revision": "d51d6c22ed2f9aeca5b094409d3aed38"
  },
  {
    "url": "index.html",
    "revision": "67ad5b50154a7a4b32e92a0e39d2aea1"
  },
  {
    "url": "logo.svg",
    "revision": "c8e972f60adb51818a2bc9566837026f"
  },
  {
    "url": "logox144.png",
    "revision": "dbc61aa4ff14990e5c6b7bab89c7aca3"
  },
  {
    "url": "logox152.png",
    "revision": "c0d7d16979c72345ad178aac19e6422d"
  },
  {
    "url": "logox16.png",
    "revision": "a8aba0e2b3e1c025d9b6b66fa1fdc06b"
  },
  {
    "url": "logox168.png",
    "revision": "53977cdc9a46be2aecd0afc33fe27fe7"
  },
  {
    "url": "logox192.png",
    "revision": "a07bfad91ff0f74aef09060c67009c53"
  },
  {
    "url": "logox32.png",
    "revision": "05afb6caa04e5fee0e984374383be50e"
  },
  {
    "url": "logox48.png",
    "revision": "bd0cfcce1338313b5cdcc9b39f727c1e"
  },
  {
    "url": "logox72.png",
    "revision": "36efd7020499a927d56cd9c1da9ac92e"
  },
  {
    "url": "logox96.png",
    "revision": "0c2169f8578573ed7aed38ba72340f71"
  },
  {
    "url": "QQ.png",
    "revision": "e609dd6116ea8b6e8c8983e546358d66"
  },
  {
    "url": "README1.html",
    "revision": "2482894c07694704f580eb0f0244a39b"
  },
  {
    "url": "README2.html",
    "revision": "aac978ac7ae40516229c0972ea6459b6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
