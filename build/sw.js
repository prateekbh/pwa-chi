"use strict";var precacheConfig=[["/assets/favicon.ico","53ac170e970ad034a55ee15ce198708c"],["/assets/icons/android-chrome-192x192.png","59e221032ab061cad83b6ce2bcddbde8"],["/assets/icons/android-chrome-512x512.png","cf3fdf7af60a294d6d3f48cb7ad82488"],["/assets/icons/apple-touch-icon.png","a0e46feb3cc577478b127936e739dd08"],["/assets/icons/favicon-16x16.png","d712b605ed58419c7e6d4ab885d147b7"],["/assets/icons/favicon-32x32.png","2f7ce797cf8f198dedb9a9f38b7ef13b"],["/assets/icons/mstile-150x150.png","ba817517b2c4e1ba1ce802c4d4fafdb4"],["/assets/pwa-shorts-icons/android/android-launchericon-144-144.png","90f4c08a15d248239085475723e1b204"],["/assets/pwa-shorts-icons/android/android-launchericon-192-192.png","8e4c23298c4d3d47bfdbc083dee9ad61"],["/assets/pwa-shorts-icons/android/android-launchericon-48-48.png","39a7bb132c5e8e68610b2ea0f81eacf8"],["/assets/pwa-shorts-icons/android/android-launchericon-512-512.png","494dcdd323ae0f935369e424ff79eebe"],["/assets/pwa-shorts-icons/android/android-launchericon-72-72.png","b48b11c5c0eb50f1cf602d16e28d2538"],["/assets/pwa-shorts-icons/android/android-launchericon-96-96.png","d75e0dba7e1ddef0a79c0d303f94cd37"],["/assets/pwa-shorts-icons/chrome/chrome-extensionmanagementpage-48-48.png","39a7bb132c5e8e68610b2ea0f81eacf8"],["/assets/pwa-shorts-icons/chrome/chrome-favicon-16-16.png","b7dc9fb488a9d00d331e221f26464c26"],["/assets/pwa-shorts-icons/chrome/chrome-installprocess-128-128.png","a881c8c8d0d74575357b29a2e705e028"],["/assets/pwa-shorts-icons/firefox/firefox-general-128-128.png","a881c8c8d0d74575357b29a2e705e028"],["/assets/pwa-shorts-icons/firefox/firefox-general-16-16.png","b7dc9fb488a9d00d331e221f26464c26"],["/assets/pwa-shorts-icons/firefox/firefox-general-256-256.png","21ee12aa40b1c6b6eb5041abc39946a4"],["/assets/pwa-shorts-icons/firefox/firefox-general-32-32.png","66b72e4268c04b0680b388b3f15856f9"],["/assets/pwa-shorts-icons/firefox/firefox-general-48-48.png","39a7bb132c5e8e68610b2ea0f81eacf8"],["/assets/pwa-shorts-icons/firefox/firefox-general-64-64.png","34511c62050cb640ad1bbf34ca9e3056"],["/assets/pwa-shorts-icons/firefox/firefox-general-90-90.png","ee4d6ac21c7166a18424898d0ac50bce"],["/assets/pwa-shorts-icons/firefox/firefox-marketplace-128-128.png","a881c8c8d0d74575357b29a2e705e028"],["/assets/pwa-shorts-icons/firefox/firefox-marketplace-512-512.png","494dcdd323ae0f935369e424ff79eebe"],["/assets/pwa-shorts-icons/icons.json","e556ef3373ae3bc686b49df9e954aa8a"],["/assets/pwa-shorts-icons/ios/ios-appicon-1024-1024.png","0de391b671733baa71710783373dfb0b"],["/assets/pwa-shorts-icons/ios/ios-appicon-120-120.png","ffdf544548ee8f655f06e14687093e8c"],["/assets/pwa-shorts-icons/ios/ios-appicon-152-152.png","8efb6b00c73794fe9e4c17e044183fcf"],["/assets/pwa-shorts-icons/ios/ios-appicon-180-180.png","ce686084b504d9adc6cbce17d7737d2c"],["/assets/pwa-shorts-icons/ios/ios-appicon-76-76.png","0165b9e8217efa50440143bc7f55f082"],["/assets/pwa-shorts-icons/ios/ios-launchimage-1024-768.png","a8f1336c3fe4f57873d8868141996cb1"],["/assets/pwa-shorts-icons/ios/ios-launchimage-1242-2208.png","9eeb26775d22c77ab7727b7ca40e3835"],["/assets/pwa-shorts-icons/ios/ios-launchimage-1334-750.png","58dcf7e6e4246c4b7ae3141426d346eb"],["/assets/pwa-shorts-icons/ios/ios-launchimage-1536-2048.png","44eb0bfbb95531d7a03387b16460eec0"],["/assets/pwa-shorts-icons/ios/ios-launchimage-2048-1536.png","01a5e93614cc1881a40af38ce4818662"],["/assets/pwa-shorts-icons/ios/ios-launchimage-2208-1242.png","9239005c0361d6aae59af5095e246d2e"],["/assets/pwa-shorts-icons/ios/ios-launchimage-640-1136.png","3a8ed6f4b81588a55d9ab5cd5642b331"],["/assets/pwa-shorts-icons/ios/ios-launchimage-640-960.png","4b5a96a7f10914adbcd2af9ac73ff1ec"],["/assets/pwa-shorts-icons/ios/ios-launchimage-750-1334.png","3b4e1b9bde38851130443a2624b43779"],["/assets/pwa-shorts-icons/ios/ios-launchimage-768-1024.png","a346aa7681b8b57989604d7f6d531056"],["/bundle.0a05f.js","a3ab394077fa6f31e824deadf6887e7b"],["/favicon.ico","53ac170e970ad034a55ee15ce198708c"],["/index.html","433d57f31ccc4a1c6c40620f37fe6a8f"],["/manifest.json","961d2219a13bf8b9968982421e34a9fd"],["/route-home.chunk.75b97.js","e482b017a69adad26d8d1eaed8cbf4ec"],["/route-profile.chunk.a41be.js","184e9858fb5da5920330f85455666817"],["/style.28ef9.css","59a8716029ec9f5343a96c07027a0ebb"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,s){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=s),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(s){return new Response(s,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,s,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(s)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,s){if(0===e.length)return!0;var a=new URL(s).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,s){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return s.every(function(s){return!s.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var s=e[0],a=e[1],n=new URL(s,self.location),c=createCacheKey(n,hashParamName,a,!1);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(s){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!s.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(s){if(!s.ok)throw new Error("Request for "+a+" returned a response with status "+s.status);return cleanResponse(s).then(function(s){return e.put(a,s)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var s=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!s.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var s,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(s=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),s=urlsToCacheKeys.has(a));!s&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("index.html",self.location).toString(),s=urlsToCacheKeys.has(a)),s&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(s){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,s),fetch(e.request)}))}});