if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,r)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const t={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return t;default:return e(s)}}))).then((e=>{const s=r(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Adam.jpeg",revision:"e7d8b45f071ce18b927758ee78f4e11f"},{url:"/_next/static/QjSEFWBGs4aWPYErLKZi1/_buildManifest.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/QjSEFWBGs4aWPYErLKZi1/_ssgManifest.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/0eceb729.ddd9e4670ddb04b43a97.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/1bfc9850.c5acb6d5df5c871dfb38.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/2428ff186fd32ca3ce31c9741086be9471d822f9.cdfe42c5dd92b73e7801.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/24cf36d91f3142ab9d9814184060b4aeddab3724.047260bb0c1653b67688.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/36bcf0ca.f6a0942f586005e72f73.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/5c01897c49fdc3d8494777b2451253815bb7a91a.6af8dd538fdce51329f0.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/5da0454d84f41cd6f7fe1c96761078cfed96b110.ba1290e84bc528a1cdf7.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/6b2f11a5b42a74adacaaa78b6fdf30f063eb40e7.92511477d14ad5001389.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/8f9da6db2dd176c828eea14a2a2f310a30e64737.2767476170e2396f8f38.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/b8aa4b15506e6c7c224512ec10170bfa2deb3ca9.577a1fba009ed3993434.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/c684dcd1a2b4e65163188bac43599fe66aec081c.2fa74943285455fa5cad.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/d0447323.05954fb4ca46c82b8f8b.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/d6a9949e.8b8aa862d1caf8857839.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/d7eeaac4.adde1cd3ca01eb115caa.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/e799a90e8e362d8f7454597383087a18c5941c49.6694ccb0e9fb6fbc6af1.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/framework.da24948cb7782ea6b68e.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/main-285f4323daaf8232aa02.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/pages/_app-d2e96ee02a0c231d4f90.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/pages/_error-877824cc23a53fc2fdfd.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/pages/_test_document-4cfc3a75dcc1e39560b7.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/pages/app/activities/%5Bid%5D-49805900319bc17f1e50.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/pages/app/activities/add-acc33cfe1c096c4204ed.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/pages/app/activities/list-1868f3fd998cbe33b291.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/pages/app/activities/summary-dd5af4e891d5c5904efb.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/pages/app/dashboard-803431a4db5b4e25b752.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/pages/app/health-checks/%5Bid%5D-5e834e0f957f55502e79.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/pages/app/health-checks/add-e337304eb50d9c4b5f10.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/pages/app/health-checks/list-4e762611de4319836f6d.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/pages/app/health-checks/summary-f562f95d9b1839c0b6b9.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/pages/app/profile-222faf801d7651a825fe.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/pages/app/profile/amputations-6a9f265b457fa64bae8a.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/pages/app/profile/details-84282e20e8334c41c777.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/pages/app/profile/injuries-16129ad7db1aea1d51e9.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/pages/app/profile/preferences-2c111255beb7aaa89fd0.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/pages/app/settings-77968f962f778cd2e364.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/pages/index-0f8e65ffd56fb5aa2954.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/pages/password-reset-af3cb477db399c08f08f.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/pages/register-79167250a64449078f3d.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/pages/sign-in-24de78d6575760c528e9.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/polyfills-4f07b0c20fc9b3d5aa59.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/_next/static/css/ae4cd6f1469b18f29441.css",revision:"QjSEFWBGs4aWPYErLKZi1"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/index.html",revision:"83661438084dae04f68010137279c219"},{url:"/manifest.json",revision:"993241b0121d78bfb4076a4b216504c2"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
