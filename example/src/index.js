import React from 'react';
import {render} from 'react-dom';

import Counter, {CounterWithoutSync} from './Counter';


const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  flex: {
    display: 'flex',
  },
  item: {
    margin: 8,
    padding: 24,
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: 4,
    boxShadow: '0 2px 4px #ccc',
    display: 'inline-flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
};


const App = () => (
  <div style={style.container}>
    <div style={style.flex}>
      <div style={style.item}>
        <h3>I am Sync-ed Counter 1:</h3>
        <Counter/>
      </div>
      <div style={style.item}>
        <h3>I am Sync-ed Counter 2:</h3>
        <Counter/>
      </div>
    </div>

    <div style={style.flex}>
      <div style={style.item}>
        <h3>I am Out-of-Sync Counter 1:</h3>
        <CounterWithoutSync/>
      </div>
      <div style={style.item}>
        <h3>I am Out-of-Sync Counter 2:</h3>
        <CounterWithoutSync/>
      </div>
    </div>
  </div>
);


render(
  <App/>,
  document.getElementById('app'),
);
