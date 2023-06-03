# Enterprise UI Development

* <https://frontendmasters.com/courses/enterprise-ui-dev/>
* code repo: <https://github.com/stevekinney/enterprise-ui-dev>

* vitest

```bash
npx vitest

npm test

npx vitest --run --reporter=verbose

npx vitest --run --reporter=dot

npx vitest --ui

npm test counter.test -- --ui

npx vitest --coverage
```

* insist on having expectations

```bash
expect.hasAsssertions();
expect.assertions(1);
```

* actions
    * <https://github.com/actions/checkout/blob/main/action.yml>
    * <https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds>

* mock service worker: <https://mswjs.io/>
* playwright: <https://playwright.dev/>
* playwright vscode extension: <https://playwright.dev/docs/getting-started-vscode>

* writing custom eslint rules
    * <https://astexplorer.net/>

```bash
git commit --no-verify
```