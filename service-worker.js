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
    "url": "1970/01/01/_404/index.html",
    "revision": "022dd4ddc39a12902dd97aaa9895e6b3"
  },
  {
    "url": "2022/10/09/test/index.html",
    "revision": "ddae0d2d71fb4f12893723487ea60920"
  },
  {
    "url": "2022/10/10/_2023华为秋招面经/index.html",
    "revision": "48fd945f0e1c18bdda93bb30790b80a0"
  },
  {
    "url": "2022/10/11/对vue中mixin的理解/index.html",
    "revision": "f8c7cd89e51000f821a24fe1a531c6a1"
  },
  {
    "url": "2022/10/11/数据库常用操作/index.html",
    "revision": "f9f3961cc5bb8b666334d64098b607da"
  },
  {
    "url": "2022/10/12/无领导小组讨论面试技巧/index.html",
    "revision": "9dbb8476f64c7ff56633037d187185d8"
  },
  {
    "url": "2022/10/15/既往不恋-当下不杂-未来不忧/index.html",
    "revision": "334045be98dfe8bef3bac63de8491850"
  },
  {
    "url": "2022/10/18/vue-如何监控数组/index.html",
    "revision": "3b3e6834a9f2d8b91d55032137f9ed6f"
  },
  {
    "url": "2022/10/19/法务岗招聘/index.html",
    "revision": "d611d5e05f321581024aeb3c4df25938"
  },
  {
    "url": "2022/10/20/《安住当下》/index.html",
    "revision": "743d78e6948a55d6669301fe7e69184f"
  },
  {
    "url": "2022/10/23/todo/index.html",
    "revision": "fc40db738180b26974b78f52c272c815"
  },
  {
    "url": "2022/10/25/一切尽意-百事从欢/index.html",
    "revision": "ac0779a0785fc983027bad6afb0404e4"
  },
  {
    "url": "2022/11/01/十月再见-十一月你好/index.html",
    "revision": "d7710c214489dddc96480904e35f49cc"
  },
  {
    "url": "2022/11/06/《人性的弱点》/index.html",
    "revision": "f8e618a4c5502437996a70c37a8c484d"
  },
  {
    "url": "2022/11/18/typescript学习笔记/index.html",
    "revision": "599be946135df4b568a3627479d867e7"
  },
  {
    "url": "2022/12/18/nodejs学习/index.html",
    "revision": "8750d94de4e6b4a6039e2f3b3c28ac7e"
  },
  {
    "url": "2022/12/22/es6/index.html",
    "revision": "43226596c511d5821d8a77e5b8ef75f8"
  },
  {
    "url": "2023/02/01/vue3项目配置/index.html",
    "revision": "eff7c5faab29d64d7300bf8d8990d8fa"
  },
  {
    "url": "2023/02/01/vue项目代码规范/index.html",
    "revision": "3312b31c07cd324d328cbe277a6dcdd8"
  },
  {
    "url": "2023/02/13/eslint配置/index.html",
    "revision": "642ff86cdf2e40d79363040758017517"
  },
  {
    "url": "2023/02/19/rn环境配置/index.html",
    "revision": "d7d4d97ffc261e44629e6a4ec3d8f2a5"
  },
  {
    "url": "2023/02/20/expo/index.html",
    "revision": "2874b9ca5436e08c1a3e580193690c3a"
  },
  {
    "url": "2023/02/22/nativebase/index.html",
    "revision": "10ea5ce19f5164a94e38a4a404b17010"
  },
  {
    "url": "2024/01/04/_2024todolist/index.html",
    "revision": "26eadd837ae726c2a0b345c5879482b8"
  },
  {
    "url": "assets/css/0.styles.d59565fb.css",
    "revision": "4a749f72ef4b42aab0f69dfd6220a5d2"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/102601.9df7d62d.png",
    "revision": "9df7d62db951be106a9480654bc040d2"
  },
  {
    "url": "assets/img/1101.d9e05df6.png",
    "revision": "d9e05df6a9007f9b607bd00aa3cf0237"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/build.8550c09d.jpg",
    "revision": "8550c09d14269b25a906739dcd972e4f"
  },
  {
    "url": "assets/img/demo01_buid_01.97b00c3e.png",
    "revision": "97b00c3e083b91d87b9f6c6d46fc9aaa"
  },
  {
    "url": "assets/img/demo01_buid.d249ef9c.jpg",
    "revision": "d249ef9c85e692e9c27b36c63121bf16"
  },
  {
    "url": "assets/img/demo01_java8.d258f58f.png",
    "revision": "d258f58f92063ae399654d60c1a6902f"
  },
  {
    "url": "assets/img/demo01_res.d42ae011.png",
    "revision": "d42ae0115a0888d2b4b94fdeb3cd928e"
  },
  {
    "url": "assets/img/eat.03869d2b.jpg",
    "revision": "03869d2b3cdfed0d8acc56ac0b5db41e"
  },
  {
    "url": "assets/img/express-result.e5db0cca.png",
    "revision": "e5db0ccaf41298f339120c397c155c53"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/no1.86c115da.png",
    "revision": "86c115dab6e8389229ba88b9499fe9af"
  },
  {
    "url": "assets/img/promises.835119a5.png",
    "revision": "835119a5c72db92a1ae89730a7af1251"
  },
  {
    "url": "assets/img/require-mode.bcdd2966.png",
    "revision": "bcdd29666a8b3d67101c667f9dea4a6d"
  },
  {
    "url": "assets/img/rice.c94d48dd.jpg",
    "revision": "c94d48dd89f3b18f1cf3cc162a64d06d"
  },
  {
    "url": "assets/img/v2-5a6d1ffb507b3db3fb468ded6a55ad75_r-16419748445572.d29384d5.jpg",
    "revision": "d29384d529ed962e4f70d23a8f54d54e"
  },
  {
    "url": "assets/img/v2-693ef7524499cf1fa32a72ee351e83e3_r.60873044.jpg",
    "revision": "60873044efc1a652ff7056d53487775d"
  },
  {
    "url": "assets/js/1.ce867c48.js",
    "revision": "478200fde2c1e588178a3d270c7dac10"
  },
  {
    "url": "assets/js/10.77d031b3.js",
    "revision": "f95c674e75884a18ae88c043dcb69b3d"
  },
  {
    "url": "assets/js/11.38f0cb7f.js",
    "revision": "e3601e1583a11396cd593e3d153760e8"
  },
  {
    "url": "assets/js/12.8cf91ae6.js",
    "revision": "69762af242869a0112e0631d47074f86"
  },
  {
    "url": "assets/js/13.f4d99792.js",
    "revision": "c872bbe3d4de3b13ac879408a075e74d"
  },
  {
    "url": "assets/js/14.b5805b90.js",
    "revision": "2bd9329db03bfccf86b72f597bdf526c"
  },
  {
    "url": "assets/js/15.35d42b47.js",
    "revision": "af164b612ecdce662cddcd736c50f6f2"
  },
  {
    "url": "assets/js/16.1fa917ab.js",
    "revision": "871ea7bf8f5a8ebfaed129a88d66bb89"
  },
  {
    "url": "assets/js/17.b4a9a2d2.js",
    "revision": "bf08c9c4840b6b1414a7d483ff60836e"
  },
  {
    "url": "assets/js/18.f0a3b1a8.js",
    "revision": "93bcc0b06c0a6f854e5a2462d3fb8313"
  },
  {
    "url": "assets/js/19.db2ab5d1.js",
    "revision": "21eecc168f8f05a5626cdb2d66d3aa02"
  },
  {
    "url": "assets/js/20.763c32bd.js",
    "revision": "335d00ff9bbcc8be82b7883426be0698"
  },
  {
    "url": "assets/js/21.df66fc1f.js",
    "revision": "d27f24878d69ef38c47d1910f202a014"
  },
  {
    "url": "assets/js/22.37709d03.js",
    "revision": "36ce7666b9d889e26875a00e7e3b668a"
  },
  {
    "url": "assets/js/23.88a070e3.js",
    "revision": "d44b42c46228abd2587b9193f6f6e800"
  },
  {
    "url": "assets/js/24.12d2dda7.js",
    "revision": "bb66962beabb2c3d1f248f3a070774cb"
  },
  {
    "url": "assets/js/25.73603f53.js",
    "revision": "e29ce38d88cb144ff3c6b3cccce9b649"
  },
  {
    "url": "assets/js/26.09dec616.js",
    "revision": "c1455b361149b51ca36db138248911a9"
  },
  {
    "url": "assets/js/27.057933c7.js",
    "revision": "9e5927ecfdee00c21c50de74a55df85d"
  },
  {
    "url": "assets/js/28.397306ba.js",
    "revision": "2e67a2ef0e69b13f0ba25594a1b02321"
  },
  {
    "url": "assets/js/29.b3babff5.js",
    "revision": "f512f656ed1365013f5f146f05557c6d"
  },
  {
    "url": "assets/js/30.8a078282.js",
    "revision": "7d81ed81e4856e706f84a5d51d3cd4ab"
  },
  {
    "url": "assets/js/31.e0a19e54.js",
    "revision": "f30722348b1bd61d9dfaad62b6611bc7"
  },
  {
    "url": "assets/js/32.353464c6.js",
    "revision": "d851ea0e97fabd56cac371ce4a6f5612"
  },
  {
    "url": "assets/js/33.f475e6c6.js",
    "revision": "8c3cca73c6794f6c6c379b4296e3eb77"
  },
  {
    "url": "assets/js/34.c9d4dd4d.js",
    "revision": "26978bf75e4da355a49867ecf49f7cf2"
  },
  {
    "url": "assets/js/35.3bd10f70.js",
    "revision": "e4d8d03604a9f3914fab24900aff11e2"
  },
  {
    "url": "assets/js/36.1f7119bf.js",
    "revision": "975305d41d2a15feae629028b4e816f2"
  },
  {
    "url": "assets/js/4.0e0a6fed.js",
    "revision": "8895c8e036c2de034bf48ecff02779ac"
  },
  {
    "url": "assets/js/5.583d6f57.js",
    "revision": "213576bdd7c7b0c46a8773af9ee8cd80"
  },
  {
    "url": "assets/js/6.7731a0a5.js",
    "revision": "cb1ad17a050394edad1a3d3667319db9"
  },
  {
    "url": "assets/js/7.9203077a.js",
    "revision": "065c07ef536efdd01ac96303ed571ed6"
  },
  {
    "url": "assets/js/8.2b6517ec.js",
    "revision": "a9c6fb8c8be7ca5a40ff7b095826cfd0"
  },
  {
    "url": "assets/js/9.aa1d418d.js",
    "revision": "f80af1d5f0de69b4b8470a76184944fe"
  },
  {
    "url": "assets/js/app.96cf1034.js",
    "revision": "b72abc089b13453f27651c3251e509ed"
  },
  {
    "url": "assets/js/vendors~docsearch.e854223e.js",
    "revision": "6be45f890207252739eb93fdd04b80b1"
  },
  {
    "url": "bg_4.jpg",
    "revision": "2b5fd66974708495e2d30f5888fe541a"
  },
  {
    "url": "categories/index.html",
    "revision": "00603e36930a71d394115451db3b2b55"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "30488f15d62bc28c99bc0e5e9a9845ce"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "407699f4f24b2199fd53e9aaa2b0b5ba"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "e3b16a1b6bc332a10e8dab5eea6bf73b"
  },
  {
    "url": "categories/知识库/index.html",
    "revision": "553b10c6eac2966e174ce5fe20ca16a8"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "b1af7773c05597e33629eb496d8807b0"
  },
  {
    "url": "index.html",
    "revision": "b2457a907bfb20af32afd7e2b738857b"
  },
  {
    "url": "logo.png",
    "revision": "5bb3f9fed0fbb33c32cdcb6b1cee76fd"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "b7a9448dbb9d2a0503bb31b85a2c5587"
  },
  {
    "url": "tag/ESLint/index.html",
    "revision": "9c668a53f12be179bbae750b83afc839"
  },
  {
    "url": "tag/flag/index.html",
    "revision": "3ed220f9a40db01a527a22bdb4ac07dd"
  },
  {
    "url": "tag/index.html",
    "revision": "e9764524547527000c43995975cf33dc"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "5088a09acc5cb7745b19240c3963a923"
  },
  {
    "url": "tag/RN/index.html",
    "revision": "db4211ea86b18af99f31b8fa62834185"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "933eb74b78d208b216ee18a78fde45f1"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "7120f0cfd8480bef4b23c89d24827439"
  },
  {
    "url": "tag/华为/index.html",
    "revision": "ae10453bfde0605fb04aacff61dee8cc"
  },
  {
    "url": "tag/技巧/index.html",
    "revision": "908da563b4a40bcbb27d6abc21b7e1b0"
  },
  {
    "url": "tag/招聘/index.html",
    "revision": "3a460abea82f3e9d84edd3f8f29e34dd"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "2c257052df20a7f16cd5f240129a2c8e"
  },
  {
    "url": "tag/有感/index.html",
    "revision": "6604bae270e374ea077121d99f301112"
  },
  {
    "url": "tag/读书笔记/index.html",
    "revision": "06e30f8636751fe09f4506595aa9ea54"
  },
  {
    "url": "tag/面经/index.html",
    "revision": "1a790236d618cd4298993307a303dcba"
  },
  {
    "url": "timeline/index.html",
    "revision": "836f5a51f9dcfa318947b25e6c25aed2"
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
