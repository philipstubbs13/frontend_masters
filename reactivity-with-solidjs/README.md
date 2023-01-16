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
* Solidjs Todos App
  - <https://stackblitz.com/edit/github-8r2jrr>

```bash
// main.tsx
import { createSignal, createEffect, createMemo, untrack } from "./reactive";

const [count, setCount] = createSignal(0);
const [count2, setCount2] = createSignal(2);
const [show, setShow] = createSignal(true);

const sum = createMemo(() => count() + count2());

createEffect(() => {
  // if (show()) console.log(count())
  // else console.log(count2());

  // console.log(count(), count2(), sum());

  console.log(untrack(() => count()))
}) // 0

// setShow(false);
setCount(10); // 10


// reactive.tsx
let context = [];

export function untrack(fn) {
    const prevContext = context;
    context = [];
    const res = fn();
    context = prevContext;
    return res;
}

function cleanup(observer) {
    for (const dep of observer.dependencies) {
        dep.delete(observer);
    }
    observer.dependencies.clear();
}

function subscribe(observer, subscriptions) {
    subscriptions.add(observer);
    observer.dependencies.add(subscriptions);
}

export function createSignal(value) {
    const subscriptions = new Set();

    const read = () => {
        const observer = context[context.length - 1]
        if (observer) subscribe(observer, subscriptions);
        return value;
    }
    const write = (newValue) => {
        value = newValue;
        for (const observer of [...subscriptions]) {
            observer.execute()
        }
    };

    return [read, write];
}

export function createEffect(fn) {
    const effect = {
        execute() {
            cleanup(effect);
            context.push(effect);
            fn();
            context.pop();
        },
        dependencies: new Set()
    }

    effect.execute();
}

export function createMemo(fn) {
    const [signal, setSignal] = createSignal();
    createEffect(() => setSignal(fn()))
    return signal;
}

```

- Reactivity with Vanilla JavaScript

```bash
import { createSignal, createEffect } from "solid-js";

const [count, setCount] = createSignal(0);

const h1 = document.createElement("h1");
createEffect(() => {
  h1.textContent = `The count is ${count()}`
})

const button = document.createElement("button");
button.textContent = "Click Me";
button.onclick = () => setCount(() => count() + 1);

document.body.textContent = "";
document.body.append(h1, button);
```

- Reactivity with JSX

```bash
import { createSignal } from "solid-js";
import { render } from "solid-js/web";

function Counter() {
  const [count, setCount] = createSignal(0);

  return (
      <>
        <h1>The count is {count()}</h1>,
        <button onClick={() => setCount(() => count() + 1)}>Click Me</button>
      </>
    )
}

render(Counter, document.body);
```

- Fine-Grained Reactivity

```bash
import { createSignal } from "solid-js";
import { render } from "solid-js/web";

function Counter(props) {
  return (
      <>
        <h1>The count is {props.children}</h1>,
        <button onClick={props.onClick}>Click Me</button>
      </>
    )
}

function App() {
  const [count, setCount] = createSignal(0);
  console.log("App");

  return (
    <>
      <Counter onClick={() => setCount(() => count() + 1)}>{count()}</Counter>
      <Counter onClick={() => setCount(() => count() + 2)}>{count() * 2}</Counter>
    </>
  )
}

render(App, document.body);
```
