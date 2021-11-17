---
title: "UI Mastery"
subheading: "Progressive Web Apps"
next: "workshop-practise-1"
prev: "ui-standards"
contentOnly: true
---

## 1. Create the Manifest file

The web app manifest is a JSON file that tells the browser about your Progressive Web App and how it should behave when installed on the user's desktop or mobile device. A typical manifest file includes the app name, the icons the app should use, and the URL that should be opened when the app is launched.

An app manifest is a JSON file containing the following information:

- The canonical name of the website
- A short version of that name (for icons)
- The theme color of the website for OS integration
- The background color of the website for OS integration
- The URL scope that the progressive web app is limited to
- The start URL that new instances of the progressive web app will implicitly load
- A human-readable description
- Orientation restrictions (it is unwise to change this from "any" without a hard technical limit)
- Any icons for your website to be used on the home screen https://www.pwabuilder.com/generate

Here is an example web app manifest

```
{
  "name": "Lightning Fast Web and Mobile Apps | Neoito",
  "short_name": "Neoito",
  "lang": "en-US",
  "scope": "/",
  "start_url": "/",
  "display": "fullscreen",
  "theme_color": "#FF6E43",
  "orientation": "portrait",
  "icons": [
    {
      "src": "images/icons/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "images/icons/icon-96x96.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "images/icons/icon-128x128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "images/icons/icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "images/icons/icon-152x152.png",
      "sizes": "152x152",
      "type": "image/png"
    },
    {
      "src": "images/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "images/icons/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png"
    },
    {
      "src": "images/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
],
  "background_color": "#ffffff"
}
```

### Add the web app manifest to your pages

```
<link rel="manifest" href="/assets/manifest.json" />
```

## 2. Create the Service Worker

When service workers are used with the fetch event, you can set up caching of assets and pages as the user browses. This makes content available offline and loads it significantly faster.

At a high level, consider what assets and pages you want users of your website always to be able to access some copy of (even if it goes out of date). These pages will additionally be cached for every user to that website with a browser that supports service workers. I suggest implicitly caching at least the following:

- Any CSS, JavaScript or image files core to the operations of your website that your starting route does not load
- Contact information for the person, company or service running the progressive web app
- Any other pages or information you might find useful for users of your website

Place the service worker file on your root directory

```
self.addEventListener("install", function(event) {
    event.waitUntil(preLoad());
  });

  var preLoad = function(){
    return caches.open("offline").then(function(cache) {
      return cache.addAll(["/","/contact/","/about/","/case-studies/"]);
    });
  };

  self.addEventListener("fetch", function(event) {
    event.respondWith(checkResponse(event.request).catch(function() {
      return returnFromCache(event.request);
    }));
    event.waitUntil(addToCache(event.request));
  });

  var checkResponse = function(request){
    return new Promise(function(fulfill, reject) {
      fetch(request).then(function(response){
        if(response.status !== 404) {
          fulfill(response);
        } else {
          reject();
        }
      }, reject);
    });
  };

  var addToCache = function(request){
    return caches.open("offline").then(function (cache) {
      return fetch(request).then(function (response) {
        return cache.put(request, response);
      });
    });
  };

  var returnFromCache = function(request){
    return caches.open("offline").then(function (cache) {
      return cache.match(request).then(function (matching) {
       if(!matching || matching.status == 404) {
         return cache.match("offline.html");
       } else {
         return matching;
       }
      });
    });
  };
```

### Load the Service Worker

To load the service worker, we just add the following to your base HTML template at the end of your `<body>` tag:

```
<script>
      if (!navigator.serviceWorker.controller) {
          navigator.serviceWorker.register("/neoito-service-worker.js").then(function(reg) {
              console.log("Service worker has been registered for scope: " + reg.scope);
          });
      }
</script>
```
