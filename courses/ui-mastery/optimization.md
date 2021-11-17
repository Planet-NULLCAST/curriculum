---
title: "UI Mastery"
subheading: "Optimization"
next: "ui-standards"
prev: "ui-debug-tools"
contentOnly: true
---

The website speed makes the first impression about your business. It’s essential to understand that you won’t get a second chance when it comes to user experience. Low website speed is one of the most frustrating things that will turn people off about your resource.

High-performance websites results in high return visits, low bounce rates, higher conversions, engagement, higher ranks in organic search, and better user experience. Slow websites will cost you money and damaged reputation. By reducing the page load time you will positively impact marketing and sales processes. You’ll get higher traffic and attract more qualified leads that can be converted into customers. In this article, we will give you recommendations about how to improve your website performance and page load time.

### Test your website speed

Page speed is often confused with "site speed," which is actually the page speed for a sample of page views on a site. Page speed can be described in either "page load time" (the time it takes to fully display the content on a specific page) or "time to first byte" (how long it takes for your browser to receive the first byte of information from the web server).

You can evaluate your page speed with [Google's PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/). PageSpeed Insights Speed Score incorporates data from CrUX (Chrome User Experience Report) and reports on two important speed metrics: First Contentful Paint (FCP) and DOMContentLoaded (DCL).

### SEO Best Practices

Google has indicated site speed (and as a result, page speed) is [one of the signals used by its algorithm to rank pages](https://webmasters.googleblog.com/2010/04/using-site-speed-in-web-search-ranking.html). And [research has shown](https://moz.com/blog/how-website-speed-actually-impacts-search-ranking) that Google might be specifically measuring time to first byte as when it considers page speed. In addition, a slow page speed means that search engines can crawl fewer pages using their allocated crawl budget, and this could negatively affect your indexation.

Page speed is also important to user experience. Pages with a longer load time tend to have higher bounce rates and lower average time on page. Longer load times [have also been shown](http://www.icrossing.co.uk/slow-pages-lose-users) to negatively affect conversions.

Here are some of the many ways to increase your page speed:

### Enable compression

Use [Gzip](https://www.gnu.org/software/gzip/), a software application for [file compression](https://developers.google.com/speed/docs/insights/EnableCompression), to reduce the size of your CSS, HTML, and JavaScript files that are larger than 150 bytes.

Do not use gzip on image files. Instead, compress these in a program like Photoshop where you can retain control over the quality of the image. See "Optimize images" below.

### Minify CSS, JavaScript, and HTML

By optimizing your code (including removing spaces, commas, and other unnecessary characters), you can dramatically increase your page speed. Also remove code comments, formatting, and unused code. [Google recommends using CSSNano and UglifyJS](https://developers.google.com/speed/docs/insights/MinifyResources).

### Reduce redirects

Each time a page redirects to another page, your visitor faces additional time waiting for the HTTP request-response cycle to complete. For example, if your mobile redirect pattern looks like this: "example.com -> [www.example.com](http://www.example.com/) -> m.example.com -> m.example.com/home," each of those two additional redirects makes your page load slower.

### Remove render-blocking JavaScript

Browsers have to build a DOM tree by parsing HTML before they can render a page. If your browser encounters a script during this process, it has to stop and execute it before it can continue.

[Google suggests avoiding and minimizing the use of blocking JavaScript.](https://developers.google.com/speed/docs/insights/BlockingJS)

### Leverage browser caching

Browsers cache a lot of information (stylesheets, images, JavaScript files, and more) so that when a visitor comes back to your site, the browser doesn't have to reload the entire page. Use a tool like [YSlow](https://addons.mozilla.org/en-US/firefox/addon/YSlow/) to see if you already have an expiration date set for your cache. Then [set your "expires" header](http://httpd.apache.org/docs/2.0/mod/mod_expires.html) for how long you want that information to be cached. In many cases, unless your site design changes frequently, a year is a reasonable time period. Google has more information about leveraging caching [here](https://developers.google.com/speed/docs/insights/LeverageBrowserCaching?csw=1).

### Improve server response time

Your server response time is affected by the amount of traffic you receive, the resources each page uses, the software your server uses, and the hosting solution you use. To improve your server response time, look for performance bottlenecks like slow database queries, slow routing, or a lack of adequate memory and fix them. The optimal server response time is under 200ms. Learn more about [optimizing your time to first byte](https://moz.com/blog/improving-search-rank-by-optimizing-your-time-to-first-byte).

### Use a content distribution network

Content distribution networks (CDNs), also called content delivery networks, are networks of servers that are used to distribute the load of delivering content. Essentially, copies of your site are stored at multiple, geographically diverse data centers so that users have faster and more reliable access to your site.

### Optimize images

Be sure that your images are no larger than they need to be, that they are in the right file format (PNGs are generally better for graphics with fewer than 16 colors while JPEGs are generally better for photographs) and that they are compressed for the web.

Use CSS sprites to create a template for images that you use frequently on your site like buttons and icons. CSS sprites combine your images into one large image that loads all at once (which means fewer HTTP requests) and then display only the sections that you want to show. This means that you are saving load time by not making users wait for multiple images to load.

### Keep learning

- [Google Developers Documentation: Page Speed Rules](https://developers.google.com/speed/docs/insights/rules)
- [Optimizing Page Speed - Actionable Tips For SEOs and Web Developers](https://moz.com/blog/optimizing-page-speed-actionable-tips-for-seos-and-web-developers)
- [PageSpeed](https://developers.google.com/speed?csw=1) Get browser extensions from Google for both Firefox and Chrome to help you identify issues that are slowing down your site.
- [YSlow](https://addons.mozilla.org/en-US/firefox/addon/YSlow/) This Firefox add-on features a grading system to help you quickly see how well your site is performing and offer insight on how to improve your site speed. It needs to be used in conjunction with Firebug.
- [WebPageTest.org](https://webpagetest.org/) Get a quick report of how a page is performing.
