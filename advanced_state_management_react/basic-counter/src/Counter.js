import React, { Component } from 'react';

export default class Counter extends Component {
  render() {
    const { count, onIncrement, onDecrement, onReset } = this.props;
    return (
      <section className="Counter">
        <h1>Count: {count}</h1>
        <button onClick={onIncrement} className="full-width">Increment</button>
        <button onClick={onDecrement} className="full-width">Decrement</button>
        <button onClick={onReset} className="full-width">Reset</button>
      </section>
    );
  }
}
