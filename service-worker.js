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
    "revision": "81fbe21a7e8f286e98771d6a136e8019"
  },
  {
    "url": "alipay.svg",
    "revision": "d945e8f5bb6a35270cd5e898c374c2aa"
  },
  {
    "url": "alipay(EN).svg",
    "revision": "d6edf2d6790cced84e843444dc1e19d4"
  },
  {
    "url": "assets/css/0.styles.be31dfbb.css",
    "revision": "afb82cc3a4fbd7a721bac825423fa984"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.a69e2597.js",
    "revision": "2bee6cd70023c0bb4db50cb2d7ff3531"
  },
  {
    "url": "assets/js/10.29531ee1.js",
    "revision": "7defbe2b6a5778710ae44ebd1b3f98dd"
  },
  {
    "url": "assets/js/11.ef2c9fe7.js",
    "revision": "2ca2098b5d573eeb57b3eb60d832ed3a"
  },
  {
    "url": "assets/js/12.04cac8eb.js",
    "revision": "fbeebc0cadf442746c0adadeb73c230b"
  },
  {
    "url": "assets/js/13.0abe9c66.js",
    "revision": "455c13cd7ee3528e37676976b90979e0"
  },
  {
    "url": "assets/js/14.36952725.js",
    "revision": "fc34705797c1d98766ec20ddff4ed9f7"
  },
  {
    "url": "assets/js/15.41f6715b.js",
    "revision": "a7ca2c965eb45a38ccdecf4c0e1483d6"
  },
  {
    "url": "assets/js/16.d0c11654.js",
    "revision": "d3e5da665a2195bfdaed1666ab94d9e5"
  },
  {
    "url": "assets/js/17.93445c40.js",
    "revision": "22be358db21c2d2b43950d52741a009d"
  },
  {
    "url": "assets/js/18.8a55da28.js",
    "revision": "fac107a839f682411c9ba698f7eb88dd"
  },
  {
    "url": "assets/js/19.b628c636.js",
    "revision": "39a879eba1db6e1a5cbc588f95ca70be"
  },
  {
    "url": "assets/js/2.4664353c.js",
    "revision": "9405923039551e14a8d8ab3daeafdfd3"
  },
  {
    "url": "assets/js/20.688c2441.js",
    "revision": "56f31fff78ff386ca7b6f332a68eb060"
  },
  {
    "url": "assets/js/21.f7c8ce4f.js",
    "revision": "32534387d333893100d329f7c16c270d"
  },
  {
    "url": "assets/js/22.f784eb28.js",
    "revision": "1dc1b4bd04cfbc92e3fa6c33ddc978e2"
  },
  {
    "url": "assets/js/23.cf60925a.js",
    "revision": "3f91448059489fda17b8e5cd9b97c73e"
  },
  {
    "url": "assets/js/24.b48dc573.js",
    "revision": "5e55c4e666e887740c2f0d80d1e0f555"
  },
  {
    "url": "assets/js/25.62c8f711.js",
    "revision": "fc614483a81a9088f18a2a02fc841baf"
  },
  {
    "url": "assets/js/26.c93fc9de.js",
    "revision": "d6d2e4b982380bad8c9cd0fee11aed90"
  },
  {
    "url": "assets/js/27.1954ffcd.js",
    "revision": "22cf87a2c029ac838764d64285ab3d9f"
  },
  {
    "url": "assets/js/28.ce32a106.js",
    "revision": "2666a52ea3dcd657ec5704815735d854"
  },
  {
    "url": "assets/js/29.19b8cdf4.js",
    "revision": "b4b057cacad84c11343ec52576fc4e6c"
  },
  {
    "url": "assets/js/30.25de0254.js",
    "revision": "573815e2d77c99feca98395148ee53f6"
  },
  {
    "url": "assets/js/31.4e443e0a.js",
    "revision": "da6d1d87276e5398a583ecac8b06013f"
  },
  {
    "url": "assets/js/32.9094bc28.js",
    "revision": "c62bdaf4d3494952239f87458c694773"
  },
  {
    "url": "assets/js/33.ca1a1e0a.js",
    "revision": "1c612a1c2c4a0bd49a02a9653f99419a"
  },
  {
    "url": "assets/js/34.74448456.js",
    "revision": "dddf5306e8f88b946f99c859f5afb450"
  },
  {
    "url": "assets/js/35.b17cc73a.js",
    "revision": "69f002606caefc81794d355116aff878"
  },
  {
    "url": "assets/js/36.3819aa59.js",
    "revision": "170df60128754f7d69f0010c60c9a595"
  },
  {
    "url": "assets/js/37.68198313.js",
    "revision": "0f8861f4c695f3b4dc04e07d96418783"
  },
  {
    "url": "assets/js/38.700df2b4.js",
    "revision": "96563c234c68fd331aa6c02ecb9cf9fa"
  },
  {
    "url": "assets/js/39.cc995d1d.js",
    "revision": "3719e14fc1d97e58c77e88444b092822"
  },
  {
    "url": "assets/js/40.46a71c81.js",
    "revision": "1ff1876da4e4f2de21332f5afcf55d59"
  },
  {
    "url": "assets/js/41.07b9ea7b.js",
    "revision": "23bb181624c5dc6ea8bb88e254251cf0"
  },
  {
    "url": "assets/js/42.86a54bdb.js",
    "revision": "aad9a431f784aef81f5297deaf1660ff"
  },
  {
    "url": "assets/js/43.c035857a.js",
    "revision": "a3c35e14ff85c9ce73834b0829800d62"
  },
  {
    "url": "assets/js/44.e9b3ce08.js",
    "revision": "759f8c3a5617f499d3371601833d21ce"
  },
  {
    "url": "assets/js/5.fcc47c8e.js",
    "revision": "633c2dca40ae6a403ab7f86c31172e0e"
  },
  {
    "url": "assets/js/6.f44422e6.js",
    "revision": "0ce4e26c84f635989db3e575d56864d4"
  },
  {
    "url": "assets/js/7.e9e8f60c.js",
    "revision": "13cb9c9ed9e68a6bf19bd0f4f2b0d56e"
  },
  {
    "url": "assets/js/8.08050c57.js",
    "revision": "560ac3245a63ab02dfad46e5c4b9acd9"
  },
  {
    "url": "assets/js/9.bc282b37.js",
    "revision": "cbc1579d5b49b47a259acb5829c7f35d"
  },
  {
    "url": "assets/js/app.9c6a34c2.js",
    "revision": "2d4c6716ef66bbd3e5c33925e9e8a1b4"
  },
  {
    "url": "assets/js/vendors~docsearch.a6628ed3.js",
    "revision": "032d5e31288a9178902d7a383149179d"
  },
  {
    "url": "attributes.svg",
    "revision": "f357e84627cfde866f45331bf10ba0e9"
  },
  {
    "url": "attributes(en).svg",
    "revision": "be95ce724b1d0d06e468c92ee5e2ba3d"
  },
  {
    "url": "comment.html",
    "revision": "b3fc43c33b4b8772d2d371d3bac0619f"
  },
  {
    "url": "content/1.what-is-html.html",
    "revision": "d1d5dbfbd7683cd1cc6867201f674d08"
  },
  {
    "url": "content/10.element-classification.html",
    "revision": "8c1eb6449417cfa885221e81c317a875"
  },
  {
    "url": "content/11.html-development-history.html",
    "revision": "0bff628b2ed6999adc0c86afc9afdb06"
  },
  {
    "url": "content/2.how-to-parse-html.html",
    "revision": "a75b763e854c1bb56dc9c11bf0d538ad"
  },
  {
    "url": "content/3.html-dom.html",
    "revision": "6fd77b7bc5818690accf6a56e995c033"
  },
  {
    "url": "content/4.elements-attributes-events.html",
    "revision": "fb7979d4d06fd133e70cd31a688f35b7"
  },
  {
    "url": "content/5.element-global-attributes.html",
    "revision": "6c31b1708ece00eb492975053fa4c5de"
  },
  {
    "url": "content/6.element-global-events.html",
    "revision": "78f3e9f9fb32f7d0944fd5e986e65735"
  },
  {
    "url": "content/7.html-document-structure.html",
    "revision": "a2803a74f72d93b282afe904785895dc"
  },
  {
    "url": "content/8.elements-in-head.html",
    "revision": "b16ba4ac620ba0c1de9116a9e2939c22"
  },
  {
    "url": "content/9.elements-in-body.html",
    "revision": "24b587908dc891fd791f50a8ceb6d995"
  },
  {
    "url": "element.svg",
    "revision": "372d8108d8caea5356c73a4e587d2907"
  },
  {
    "url": "element(en).svg",
    "revision": "74787b29dc1d7914618189a616a1861c"
  },
  {
    "url": "en/comment.html",
    "revision": "a8c5cfa06adfe789c00ec714345132dd"
  },
  {
    "url": "en/content/1.what-is-html.html",
    "revision": "efd80187a59b14db3ff571d3b6afef9e"
  },
  {
    "url": "en/content/10.element-classification.html",
    "revision": "c0efab6e5060eaade50890097a1a9b5c"
  },
  {
    "url": "en/content/11.html-development-history.html",
    "revision": "d41f8cd05cbff145eebdfcc40d0b98a4"
  },
  {
    "url": "en/content/2.how-to-parse-html.html",
    "revision": "5a1d7680f933d5b52d8d71cb477ee9c8"
  },
  {
    "url": "en/content/3.html-dom.html",
    "revision": "c34a3716686a12d5598f0dfc1b7a1d5a"
  },
  {
    "url": "en/content/4.elements-attributes-events.html",
    "revision": "4faa8b795c08e2f02db9dddddb440551"
  },
  {
    "url": "en/content/5.element-global-attributes.html",
    "revision": "548350edfbca22f47d4fa241b6daf315"
  },
  {
    "url": "en/content/6.element-global-events.html",
    "revision": "ff2a95b00bfddc439135ec96370745d6"
  },
  {
    "url": "en/content/7.html-document-structure.html",
    "revision": "484c37a42b0d2e0e8e52719c677efbe7"
  },
  {
    "url": "en/content/8.elements-in-head.html",
    "revision": "4e16f0da474e9b9a4e43cadf72207ca9"
  },
  {
    "url": "en/content/9.elements-in-body.html",
    "revision": "1a036f9c5b2c2c8024818e9cfb794148"
  },
  {
    "url": "en/index.html",
    "revision": "9b7708525386a1a8f41d4bef05a95930"
  },
  {
    "url": "en/support.html",
    "revision": "3a61bc588f75738600d5a7d40df474e4"
  },
  {
    "url": "en/usage.html",
    "revision": "8b874a5564b81513e2642c5d1b65c876"
  },
  {
    "url": "index.html",
    "revision": "26560567c470343bc0ffa9a9c2f4b1cb"
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
    "url": "logox512.png",
    "revision": "85209417c4a18b43bac67e8be4fcef37"
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
    "url": "support.html",
    "revision": "9a3693fb666f166185e9e3a850f4bf29"
  },
  {
    "url": "usage.html",
    "revision": "94393148e209a5b9399b7d87a9170516"
  },
  {
    "url": "wechatpay.svg",
    "revision": "81880fe2ca28e8831d549df573006433"
  },
  {
    "url": "wechatpay(EN).svg",
    "revision": "7658114b366cef791fb2b08e750eabeb"
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
