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
    "revision": "8d9efae0b9a63bec940fd555e95c40ad"
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
    "url": "assets/css/0.styles.d9e19662.css",
    "revision": "9427c6a1a658f747647002e5f8743e4f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.bed43743.js",
    "revision": "8cfabe0c75871e649d37ce48fe137678"
  },
  {
    "url": "assets/js/12.8f1883b4.js",
    "revision": "bdb2ea193b46c0bb2f540591292c43a8"
  },
  {
    "url": "assets/js/13.82513815.js",
    "revision": "332ee7fbda299e88857df4d7afc39d0e"
  },
  {
    "url": "assets/js/14.bea43ad0.js",
    "revision": "4ccd4d5c85ee87ddb5668db514adcbfe"
  },
  {
    "url": "assets/js/15.31f1d6c3.js",
    "revision": "1281130d8281cddc7e2a20ba08bfc487"
  },
  {
    "url": "assets/js/16.04770727.js",
    "revision": "4daa37f47907f21e1a74d006781dd304"
  },
  {
    "url": "assets/js/17.63508339.js",
    "revision": "e91397f3bbdb6424f0959bac5cd786d4"
  },
  {
    "url": "assets/js/18.85c69933.js",
    "revision": "b4006fdf0bba55d7c517d7330ab41b1d"
  },
  {
    "url": "assets/js/19.f43ba820.js",
    "revision": "507c30b88e1c925b1eb0d0c5f24c30d6"
  },
  {
    "url": "assets/js/2.b7670b6d.js",
    "revision": "0a893dbcb65dc2840cd06ba1e1b2da2a"
  },
  {
    "url": "assets/js/20.90d6d5a4.js",
    "revision": "aa240409d38a3b9dd7331969aa944450"
  },
  {
    "url": "assets/js/21.23d5d1af.js",
    "revision": "6e94b5cdad7072f8a3266df8594cdc1b"
  },
  {
    "url": "assets/js/22.ebe552de.js",
    "revision": "7a350fa45abfadf36a91838229f27dca"
  },
  {
    "url": "assets/js/23.264e4b78.js",
    "revision": "bf9f62320edf358b53a506390ec0195b"
  },
  {
    "url": "assets/js/24.57196b6b.js",
    "revision": "f634572bffbba5300f97c1d71307691c"
  },
  {
    "url": "assets/js/25.5ff97c64.js",
    "revision": "cad4e7f9fa3cc5ae603ee4100db732ed"
  },
  {
    "url": "assets/js/26.18de0096.js",
    "revision": "8acfad924aa9173554605b8fa14581a7"
  },
  {
    "url": "assets/js/27.8320f630.js",
    "revision": "7d34bb63d418fa9b80545e1faf262c7c"
  },
  {
    "url": "assets/js/28.589c49ea.js",
    "revision": "da30324dd4d27b2b794c36d45c4608c7"
  },
  {
    "url": "assets/js/29.a52df968.js",
    "revision": "db0b89f65938b79cd797dc6202e19ded"
  },
  {
    "url": "assets/js/3.22ef4beb.js",
    "revision": "d005c643ef68f3f71044a27b2bf366e7"
  },
  {
    "url": "assets/js/30.cdc450b1.js",
    "revision": "4da41dc89a32b9a0b3dd3b109933b9ee"
  },
  {
    "url": "assets/js/31.f39d6e39.js",
    "revision": "68764872fbbe3ae08b9e198b7a79b79a"
  },
  {
    "url": "assets/js/32.1855df63.js",
    "revision": "3cd53af504b4ed448d3da22fbcc111f1"
  },
  {
    "url": "assets/js/33.46165a4a.js",
    "revision": "2919eb5ca9e487584eb7ea91684e153b"
  },
  {
    "url": "assets/js/34.7e6d16f5.js",
    "revision": "77e4ac1e0b03f38f4365b2d168d8a799"
  },
  {
    "url": "assets/js/35.0462036b.js",
    "revision": "c9fa67ef73000832c90d46f83ad6d1f1"
  },
  {
    "url": "assets/js/36.886e1cce.js",
    "revision": "bfa1bb38a1707a89ae469d32a539bf9f"
  },
  {
    "url": "assets/js/37.c8f44038.js",
    "revision": "61925fc115b01406a62b93dc23680208"
  },
  {
    "url": "assets/js/38.01228662.js",
    "revision": "2380c2392002624bc281a022dde466bf"
  },
  {
    "url": "assets/js/39.c47ec2b5.js",
    "revision": "9c3b07351cd02b43908feb68c281a0a3"
  },
  {
    "url": "assets/js/4.4a6627fe.js",
    "revision": "26360fa33ec92c40c2e5043ca8c04d2c"
  },
  {
    "url": "assets/js/40.d404372c.js",
    "revision": "f64995cc4f8f1fe1506b0c1358671277"
  },
  {
    "url": "assets/js/41.4cadad72.js",
    "revision": "466f48c482749df194851464331e84c8"
  },
  {
    "url": "assets/js/42.45325f9d.js",
    "revision": "1d51a5beca55057141816c78d09f3f66"
  },
  {
    "url": "assets/js/43.eebf9926.js",
    "revision": "2d9c465ff1b9fd9ed201ff77e632f7bf"
  },
  {
    "url": "assets/js/44.d2aa9753.js",
    "revision": "c0bd413c659e51a3f5dfc057ead40625"
  },
  {
    "url": "assets/js/45.45fd9c72.js",
    "revision": "a603b826d26614f8e9ce5691fbba183d"
  },
  {
    "url": "assets/js/46.0ed4be0b.js",
    "revision": "a5058c80446d0dbd25e474f4ccb09e17"
  },
  {
    "url": "assets/js/47.10cf4cd4.js",
    "revision": "9b408c57d7fcf667d1b8d59b4d9819cb"
  },
  {
    "url": "assets/js/48.ea00cf47.js",
    "revision": "2c438ba3954d93a60bd46f365ad68d8d"
  },
  {
    "url": "assets/js/49.3260da9c.js",
    "revision": "7ef2a14050e2e952b628b5b84d42fe8d"
  },
  {
    "url": "assets/js/5.7db44f33.js",
    "revision": "48dc9df6ec0b6eecbe8ab32d02016e76"
  },
  {
    "url": "assets/js/50.469ab59b.js",
    "revision": "e34548352c1f4eb855569df537c414ea"
  },
  {
    "url": "assets/js/51.01ea249e.js",
    "revision": "3b72aba85717f5326940ce67326921d4"
  },
  {
    "url": "assets/js/52.98a22287.js",
    "revision": "2868130fc18de1978a525347ae66e61d"
  },
  {
    "url": "assets/js/53.b99cdeee.js",
    "revision": "4cfb4cb8da4362ea12a81d3c18177b02"
  },
  {
    "url": "assets/js/54.517300cb.js",
    "revision": "551dab09f1072eadc2199cd30b23d8f9"
  },
  {
    "url": "assets/js/55.b34def75.js",
    "revision": "3c2a2135ab99c1c729ce55b879cd6dd1"
  },
  {
    "url": "assets/js/56.36f1ebc8.js",
    "revision": "db843cb6ffb26b3ce0cd3dcc52ec0144"
  },
  {
    "url": "assets/js/57.2c58d6e0.js",
    "revision": "9417f42fb98e0284a922edeadcf07a58"
  },
  {
    "url": "assets/js/58.85768a64.js",
    "revision": "e0ca9540ed2f3cda28864a35d166e61c"
  },
  {
    "url": "assets/js/6.a494e924.js",
    "revision": "6f3d7d39442be1d256417269847db33f"
  },
  {
    "url": "assets/js/7.20f4c624.js",
    "revision": "ad35acf00392d0d79177fdbb10503548"
  },
  {
    "url": "assets/js/8.763cb4e1.js",
    "revision": "3e7eb57b60f4bf7868a53f52b152250e"
  },
  {
    "url": "assets/js/9.34b73c09.js",
    "revision": "aace1df5d3bc0a643397772d59bf9cfe"
  },
  {
    "url": "assets/js/app.300fa0ef.js",
    "revision": "ce0e1b7c1fcd949f41055d6a0456f9cc"
  },
  {
    "url": "assets/js/vendors~docsearch.b0e7adfe.js",
    "revision": "616185a04e209e6053ec0f25bce74dc8"
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
    "revision": "1362cf104cfa85a4c7ada6ed8fed312f"
  },
  {
    "url": "content/1.what-is-html.html",
    "revision": "da5c2ba8189da42a6a286301756a9c7c"
  },
  {
    "url": "content/10.element-classification.html",
    "revision": "40a75da2d98d7711645b30df10bccc53"
  },
  {
    "url": "content/11.html-development-history.html",
    "revision": "19ac7eca9e766cd87f016af96ed4a29f"
  },
  {
    "url": "content/2.how-to-parse-html.html",
    "revision": "424def047ab7f5040a6e46a701f4b6a1"
  },
  {
    "url": "content/3.html-dom.html",
    "revision": "34800d14abfe513524d97a068acc1638"
  },
  {
    "url": "content/4.elements-attributes-events.html",
    "revision": "fff107f471f459fd8be57eff63f406e1"
  },
  {
    "url": "content/5.element-global-attributes.html",
    "revision": "54399c267612bbad6ecac5dd1304100f"
  },
  {
    "url": "content/6.element-global-events.html",
    "revision": "f3657efc7f6cfa8149613fcc0b35bc02"
  },
  {
    "url": "content/7.html-document-structure.html",
    "revision": "c4e9f51e25db304a6ffa2c42f4e563d6"
  },
  {
    "url": "content/8.elements-in-head.html",
    "revision": "a8aa7bd3943d36a855137e08f10bb4a7"
  },
  {
    "url": "content/9.elements-in-body.html",
    "revision": "d6ab6e0e5670ba2fc9a5ef6f1c849fa8"
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
    "revision": "0b5c88447064b1a042f1eca0c6054c8b"
  },
  {
    "url": "en/content/1.what-is-html.html",
    "revision": "c98a54912d3767aa8950bc86af8cc224"
  },
  {
    "url": "en/content/10.element-classification.html",
    "revision": "fff077e1fe0bb8c5d9b442e10172853d"
  },
  {
    "url": "en/content/11.html-development-history.html",
    "revision": "df8ec0d2762b5a352233aa87653e4e36"
  },
  {
    "url": "en/content/2.how-to-parse-html.html",
    "revision": "8ae34f8714dfdafbb001312889764742"
  },
  {
    "url": "en/content/3.html-dom.html",
    "revision": "2ce328dbc7009ee0b1c581d5407d3142"
  },
  {
    "url": "en/content/4.elements-attributes-events.html",
    "revision": "46dbdaaa9e04de221aa87897b9c5d389"
  },
  {
    "url": "en/content/5.element-global-attributes.html",
    "revision": "4138ce5bd3df1f9420207cfc50958df8"
  },
  {
    "url": "en/content/6.element-global-events.html",
    "revision": "94a1fd1694a1e025c62d700f3aea72e4"
  },
  {
    "url": "en/content/7.html-document-structure.html",
    "revision": "3756c29585df17107fe5e48e01699295"
  },
  {
    "url": "en/content/8.elements-in-head.html",
    "revision": "18a6ad50aa90b5dfba0604faa0defcea"
  },
  {
    "url": "en/content/9.elements-in-body.html",
    "revision": "7307249d715cbf8afd45b1308308ccd6"
  },
  {
    "url": "en/index.html",
    "revision": "0e376918df884ad85f6608255f004b39"
  },
  {
    "url": "en/support.html",
    "revision": "86014cb49762e3dc0392ae22c76e66b5"
  },
  {
    "url": "en/usage.html",
    "revision": "aad5211d77fa02b679a4f06860fd6b0f"
  },
  {
    "url": "index.html",
    "revision": "57fe77c74604a16a84f4551ef6407dd4"
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
    "revision": "efed2668ecf325448eafe086244a11ba"
  },
  {
    "url": "usage.html",
    "revision": "131727a3a240d92a900b5df8bb34d6d8"
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
