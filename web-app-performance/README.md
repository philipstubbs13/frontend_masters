# Web App Performance

- <https://frontendmasters.com/courses/web-app-performance/>

* course slides: <https://github.com/firtman/adv-webperf/blob/main/material/slides.pdf>
* course code: <https://github.com/firtman/adv-webperf>
* <https://www.thinkwithgoogle.com/>
* <https://gs.statcounter.com/>
* <https://www.lukew.com/ff/entry.asp?1797>
* <https://developer.chrome.com/docs/crux/>
* <https://pagespeed.web.dev/>
* <https://www.webpagetest.org/>
* <https://httparchive.org/>
* <https://hstspreload.org/>
* <https://github.com/google/zopfli>
* <https://github.com/google/brotli>
* <https://squoosh.app/>
* <https://frontendmasters.com/courses/web-assembly/>

www.frontendmasters.com

1-DNS query - 100ms
2-TCP connection - 120ms
3-SSL Negotation - 150ms
4-HTTP Request - uplink
header - body
5-Server process (backend time) - 200ms to 500ms
6-HTTP Response - downlink
header - body
7-Browsers HTML parsing
8-Resource Discovery & Priority
9-Render (layout, paint)

Resource Discovery Queue

Cache headers per file

- Absolute expiration date (1.0)
- Relative expiration date (1.1)
- More specs / values

Browser needs a resource

1. It checks the cache
   A) Cache MISS: we go to the network
   B) Cache HIT:
   i) it's expired
   conditional request: 1) Not modified (updated cache header) 2) OK, new file
   ii) it's not expired
   we use the file from the cache
