import * as React from 'react';
import { useReducer } from 'react';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProgressCircle } from '../ProgressCircle';
import { timerMachine } from './timerMachine.js';
import { timerMachineConfig } from './timerMachine.js';

// Import the timer machine and its initial state:
// import { ... } from './timerMachine';

export const Timer = () => {
  const [state, dispatch] = useReducer(timerMachine, timerMachineConfig.initial)

  const { duration, elapsed, interval } = {
    duration: 60,
    elapsed: 0,
    interval: 0.1,
  };

  return (
    <div
      className="timer"
      data-state={state}
      style={{
        // @ts-ignore
        '--duration': duration,
        '--elapsed': elapsed,
        '--interval': interval,
      }}
    >
      <header>
        <h1>Exercise 00</h1>
      </header>
      <ProgressCircle />
      <div className="display">
        <div className="label">{state}</div>
        <div
          className="elapsed"
          onClick={() => {
            // ...
          }}
        >
          {Math.ceil(duration - elapsed)}
        </div>
        <div className="controls">
          <button
            onClick={() => {
              dispatch({ type: 'RESET' });
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="actions">
        {state !== 'paused' && (
          <button
            onClick={() => {
              dispatch({ type: 'TOGGLE' })
            }}
            title="Pause timer"
          >
            <FontAwesomeIcon icon={faPause} />
          </button>
        )}

        {(state === 'paused' || state === 'idle') && (
          <button
            onClick={() => {
              dispatch({ type: 'TOGGLE' })
            }}
            title="Start timer"
          >
            <FontAwesomeIcon icon={faPlay} />
          </button>
        )}
      </div>
    </div>
  );
};
