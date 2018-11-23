import React from 'react';
import {withCount} from './CountWrapper';
import {withColour} from './ColourWrapper';
import {compose} from '@pulsgarney/react-sync-state';


const style = {
  button: {
    height: '2rem',
    margin: '0 8px 8px',
    padding: '0 8px',
    background: '#fff',
    border: '1px solid rgba(0, 0, 0, 0.23)',
    borderRadius: 4,
    cursor: 'pointer',
  },
  input: {
    margin: 16,
    padding: 8,
    borderRadius: 4,
    fontSize: '1rem',
    border: '1px solid #ccc',
    outline: 'none',
  },
};


class Counter extends React.PureComponent {
  input = React.createRef();

  handleInput = () => {
    const {current: {value}} = this.input;
    this.props.handleChange
    && this.props.handleChange(value);
  };

  render () {
    const {
      count,
      color,
      handleCount,
      handleCountAsync,
    } = this.props;

    return (
      <div style={{color}}>
        <h3>{count}</h3>
        <button
          style={style.button}
          onClick={() => handleCount(1)}>
          Add
        </button>
        <button
          style={style.button}
          onClick={() => handleCount(-1)}>
          Minus
        </button>
        <button
          style={style.button}
          onClick={() => handleCountAsync(1)}>
          Async Add
        </button>
        <button
          style={style.button}
          onClick={() => handleCountAsync(-1)}>
          Async Minus
        </button>
        <hr/>
        <label>
          Type the Colour here:
          <input
            value={color}
            ref={this.input}
            style={style.input}
            onChange={this.handleInput}
            placeholder='I have no Colours'/>
        </label>
      </div>
    );
  }
}


export const CounterWithoutSync = withCount(Counter, false);

export default compose(
  withCount,
  withColour,
)(Counter);
