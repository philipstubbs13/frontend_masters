# State Management in Pure React, v2

* <https://frontendmasters.com/courses/pure-react-state/>
* <https://speakerdeck.com/stevekinney/react-state?slide=21>
* <https://github.com/FrontendMasters/pure-react-state-management>

## Class-Based State

* <https://codesandbox.io/s/simple-counter-boilerplate-kdvtq?module=%2Fsrc%2FCounter.js>
* <https://codesandbox.io/s/simple-counter-setstate-function-and-callback-u0ev5?module=%2Fsrc%2FCounter.js>

## Hooks State

* <https://codesandbox.io/s/simple-counter-adds-localstorage-support-exercise-starter-wxubb?module=%2Fsrc%2FCounter.js>
* <https://codesandbox.io/s/simple-counter-refactored-to-use-hooks-ndwcr?module=%2Fsrc%2FCounter.js>
* <https://codesandbox.io/s/simple-counter-set-value-with-a-function-gxshy?module=%2Fsrc%2FCounter.js>
* <https://codesandbox.io/s/simple-counter-update-documenttitle-with-useeffect-hjedr?module=%2Fsrc%2FCounter.js>
* <https://codesandbox.io/s/simple-counter-useeffect-local-storage-exercise-64x3e?module=%2Fsrc%2FCounter.js>
* <https://codesandbox.io/s/simple-counter-useeffect-local-storage-solution-m854x?module=%2Fsrc%2FCounter.js>
* <https://codesandbox.io/s/github/stevekinney/simple-counter-react-state/tree/example-use-local-storage>
* <https://codesandbox.io/s/simple-counter-useref-x7x8p?module=%2Fsrc%2FCounter.js>

## Reducers

* <https://codesandbox.io/s/github/stevekinney/grudges-react-state>

## Context

## Data Fetching and useEffect

## Thunks

* A function returned from another function.
* Code to be executed later.
* useThunkReducer hook

```bash
const useThunkReducer = (reducer, initialState) =>{
  const [state, dispatch] = useReducer(reducer, initialState)

  const enhancedDispatch = action => {
    console.log(action);

    if (isFunction(action)) {
      action(dispatch)
    } else {
      dispatch(action);
    }
  }

  return [state, enhancedDispatch];
}
```
