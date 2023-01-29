# JavaScript in the Background

- <https://frontendmasters.com/courses/background-javascript/>

* <https://github.com/firtman/javascript-background>
* page visibility api: <https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API>
* Freezing Detection
  - chrome://discards/

- Chrome extension
  - <https://chrome.google.com/webstore/detail/the-great-er-discarder-er/plpkmjcnhhnpkblimgenmdhghfgghdpp>

* <chrome://serviceworker-internals/>
* <https://rpsthecoder.github.io/square-loading-favicon/>
* picture in picture
  - <https://pip-rendering-fun.netlify.app/>
* Site Engagement Score
  - <chrome://discards/>

```bash
await navigator.permissions.query({
  name: 'periodic-background-sync'
});
```

```bash
status = await Notification.requestPermission();
```

- Web Push

  - <https://www.npmjs.com/package/web-push>

  ```bash
  npx web-push generate-vapid-keys
  ```
