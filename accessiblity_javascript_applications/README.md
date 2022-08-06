# Accessibility in JavaScript Applications

* <https://frontendmasters.com/courses/javascript-accessibility/>
* <https://github.com/marcysutton/js-a11y-workshop>
* <https://marcysutton.github.io/js-a11y-workshop/slides/>
* Making the web more inclusing with and for people with disabilities.
* <http://bit.ly/microsoft-inclusive-toolkit>
* JavaScript Applications
  * Client-rendered: no traditional page reloads
  * Built with frameworks
  * Sometimes server-rendered with "hydration"
  * Challenges and opportunities.
* NVDA: <https://www.nvaccess.org/download/>
* <https://www.deque.com/axe/>
* <https://accessibilityinsights.io/>
* Testing tools: <https://marcysutton.github.io/js-a11y-workshop/#Testing-Tools>
* Responsive design is good for accessibility.
* A11y debugging
  * Render in a web browser.
  * Test controls with the keyboard.
  * Use accessibility web extensions.
  * Check color contrast.
  * Test with screen readers
  * Use magnification and zoom.
* Mac has a screen reader built in: Function + Ctrl + F5
  * Silence screen reader: Ctrl key
* Debugging in gatsby app:

```bash
gatsby build && gatsby serve
```

* The accessibility tree 
  * A parallel structure to the DOM.
  * Uses platform Accessibility APIs to communicate page structure and content to assistive technologies.
  * chrome://accessibility/
  * Visualize with broser DevTools
    * Semantic markup and CSS styles impact the accessibility tree.
* Focus testing haxx
  * Paste into browser devTools console.

  ```bash
  document.body.addEventListener('focusin', (event) => {
    console.log(document.activeElement)
  })
  ```

* landmark elements: <https://www.w3.org/TR/wai-aria-practices/examples/landmarks/main.html>
* Focus management
  * Moving the user's focus as part of an interaction to alert them to new content.
  * Also: handling focus in disabled and mutated parts of the page.
  * Focus management building blocks
    * Reachable and operable elements.
    * TAB, escape, and arrow keys.
    * Visible focus styles.
    * Hidden/inert content.
  * tabIndex in HTML
    * Make non-interactive elements focusable.
    * Screen readers go beyond the TAB key.
  * tabindex + role + name
    * Expose accessibility information for focusable elements.
  * tabindex + role + name + events
    * Make custom controls fully interactive.
  * ARIA: Accessible Rich Internet Applications
    * <https://www.w3.org/TR/wai-aria-practices/examples/landmarks/main.html>
    * role: what is it?
    * state: what's happening to it?
    * property: what's the nature of it?
    * The first rule of ARIA is don't use it.
  * Modal layers: 
    * disabling background content.
      * aria-hidden="true" and tabindex="-1"
      * inert (+polyfill)
      * CSS display: none
  * <http://w3c.github.io/aria-practices/>
  * Navigation vs Actions
    * a.k.a Links vs Buttons
    * <https://marcysutton.com/links-vs-buttons-in-modern-web-applications>
  * Visible focus styles
    * Useful for so many people and situations, but often turned off for everyone.
    * <https://github.com/WICG/focus-visible>
    * <https://github.com/ten1seven/what-input>
  * CSS-in-JS
    * Cached class names aren't user friendly, e.g. class="sc-bdVaJa"
    * Add a stable CSS class.
* Client-side routing
  * Navigation where JavaScript controls browser history and dynamically maps URLs to each page or view.
  * <https://www.gatsbyjs.org/blog/2019-07-11-user-testing-accessible-client-routing/>
  * React FocusScopes: <https://twitter.com/devongovett/status/1100829054800846848>
* <https://github.com/WICG/focus-visible>
* Announcement patterns
  * notify assistive tech users without moving focus.
    * asynchronous save / update /etc.
    * combobox usage / list filterin
    * chat widgets
    * title changes
  * Aria live regions
    * mesage command centers of varying importance.
    * <https://www.w3.org/TR/wai-aria/#live_region_roles>
  * Include multiple regions for stubborn situations.
  * Site level announcement manager APIs.
* Semantic HTML
  * Use heading and landmarks.
  * Start with natie UI controls.
  * Build semantics into templates.
  * Verify assitive tech output.
  * <https://webaim.org/techniques/semanticstructure/>
  * <https://addons.mozilla.org/en-US/firefox/addon/web-developer/>
  * <https://dequeuniversity.com/screenreaders/nvda-keyboard-shortcuts#nvda-the_basics>
  * <https://dequeuniversity.com/screenreaders/voiceover-keyboard-shortcuts#vo-mac-the-rotor>
* Unobtrusive motion
  * Building safe and delightful interfaces.
  * prefers-reduced-motion CSS
  * media, animation playback controls.
  * opt-in for autoplay
  * <https://source.opennews.org/articles/motion-sick/>
* Progressive enhancement
  * Emphasize core web page content first, then add layers of presentation and features on top as browsers/network connections allow.
    * Turn off JavaScript.
    * Provide accessible baseline markup.
    * Add ARIA with scripting.
    * Prioritize core user flows.

* Testing
  * <https://www.deque.com/blog/writing-automated-tests-accessibility/>
  * <https://testing-library.com/docs/dom-testing-library/api-events/>
  * <https://github.com/testing-library/jest-dom>
  * <https://github.com/marcysutton/js-a11y-workshop/blob/master/examples/unit-testing/dropdown.test.js>
  * <https://github.com/dequelabs/axe-core>
  * <https://www.npmjs.com/package/cypress-axe>
  * <https://wave.webaim.org/api/>
  * <https://marcysutton.github.io/a11y-and-ci/#/>
  * <https://www.smashingmagazine.com/2018/09/importance-manual-accessibility-testing/>
  * <https://inclusivedesign24.org/2019/>
