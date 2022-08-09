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
    "revision": "7976cc55d934a8ad5022820c956a7aec"
  },
  {
    "url": "assets/css/0.styles.ef9e6091.css",
    "revision": "cff77004e73128bc8d19dfcedeeccc39"
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
    "url": "assets/js/3.06a4639c.js",
    "revision": "64a0de81b9ed485ec8c0722fe0560f64"
  },
  {
    "url": "assets/js/4.df3683d8.js",
    "revision": "737e67ca609e75119a5152853e6cc26c"
  },
  {
    "url": "assets/js/5.e292ec0a.js",
    "revision": "150bfc064dd753fc2e11e10fa01eccad"
  },
  {
    "url": "assets/js/6.a68bbf96.js",
    "revision": "e0687a3e322bbac37c70865f3e8c53a1"
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
    "url": "assets/js/9.6885537c.js",
    "revision": "f353c674df8c73c81eb8bb1d1924d90f"
  },
  {
    "url": "assets/js/app.f92f60e4.js",
    "revision": "076a3027c2570ec13c4373f9786a1866"
  },
  {
    "url": "index.html",
    "revision": "580141d738d1a30185c9ba134dbb29a2"
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
    "revision": "22fc086d37550df2bb1d7817bf002211"
  },
  {
    "url": "README2.html",
    "revision": "12816a3001ee572cfc335597bc428aa8"
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
