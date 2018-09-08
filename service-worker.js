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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9c86013c54931916e8067be6886b98c8"
  },
  {
    "url": "assets/css/0.styles.fdba907a.css",
    "revision": "3cd539354a92487a748cde07457d1b7d"
  },
  {
    "url": "assets/js/2.ae771476.js",
    "revision": "c399bd60068db1c3e9cf29c75861ef0b"
  },
  {
    "url": "assets/js/3.9851f985.js",
    "revision": "b12d24f3fd0d21debdd92da2a7b0973d"
  },
  {
    "url": "assets/js/4.c095c198.js",
    "revision": "f8af2e66d22ddd4a2bb85691ca5602e0"
  },
  {
    "url": "assets/js/5.226e3616.js",
    "revision": "ecbfe56ef72f5ce0c73ae68856706e00"
  },
  {
    "url": "assets/js/app.8bde956b.js",
    "revision": "b62577ccb36610eb294e6e0c763a0397"
  },
  {
    "url": "index.html",
    "revision": "ba8a416e53ade9cc50916578a1b3d1a4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
