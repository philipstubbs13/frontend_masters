# Reactivity with SolidJS

- <https://frontendmasters.com/courses/reactivity-solidjs/>

* course website: <https://reactivity-with-solidjs.netlify.app/workshop/introduction>
* slides: <https://static.frontendmasters.com/assets/courses/2023-01-09-reactivity-solidjs/reactivity-solidjs-slides.pdf>
* Signals and Side Effects
  - <https://codesandbox.io/s/reaction-5wyzu>
* Derivations
  - <https://codesandbox.io/s/no-derivation-qq54h>
* Dynamic Tracking

  - <https://codesandbox.io/s/conditional-dependency-hbjg6>

* Creating a Signal from Scratch
  - <https://playground.solidjs.com/>

```bash
// main.tsx
import { createSignal, createEffect } from "./reactive";

const [count, setCount] = createSignal(0);

createEffect(() => {
  console.log(count());
}) // 0

setCount(10); // 10


// reactive.tsx
const context = [];

export function createSignal(value) {
    const subscriptions = new Set();

    const read = () => {
        const observer = context[context.length - 1]
        if (observer) subscriptions.add(observer);
        return value;
    }
    const write = (newValue) => {
        value = newValue;
        for (const observer of subscriptions) {
            observer.execute()
        }
    };

    return [read, write];
}

export function createEffect(fn) {
    const effect = {
        execute() {
            context.push(effect);
            fn();
            context.pop();
        }
    }

    effect.execute();
}
```
