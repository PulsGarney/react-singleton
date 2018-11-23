React Sync State
===

> A React Helper that makes GLOBAL STATE.

As we all know, React manages components 'separately'.
So even you import the very same component its state is different within each instance you've created.  

To solve that problem, we have so many different kinds of state flow management tools such as Redux, MobX and so on.

But sometimes I don't need that much, I just need to share a few states across a few different places.
I feel like no matter which library that I would import is considered relatively unnecessary for this sort of jobs.

And that is how I find [Peter's repo](https://github.com/peterbee/react-singleton)

A Singleton HOC for React. Well, it is kinda like Singleton, BUT Still, I feel like it is more of Subscription than Singleton. So I fork it.

**That's it. It DOES NOT have any new features. I just Fork it and rewrite it with es-next, and add a demo page**

To note that **I don't think it's the best way to share state across places to places.**
It's more like everything has its own place to be. This is more fit in small and light works.
If you got some heavy load of data or you need more precision of controls. Maybe you need Redux or Sagas to do the job.

I kept Peter's original [README](https://github.com/PulsGarney/react-sync-state/blob/master/README-Pete.md)
here as a snapshot in case he modified his. All credit goes to him. 🙌🙌


## Getting Started

### Live Demo

A simple Demo here shows How you can Sync things and Work with multiple modules(like Reducers)  
[Demo](https://pulsgarney.github.io/react-sync-state/example/dist/index.html)

### Install

```sh

npm i @pulsgarney/react-sync-state

// or

npm i https://github.com/PulsGarney/react-sync-state.git

```

### Import

```js

// Import the Source Code(with Class and ES-next syntax)
import syncWrapper from '@pulsgarney/react-sync-state';

// Import the UMD build(with Vanilla JavaScript)
import {syncWrapper} from '@pulsgarney/react-sync-state';

// Import the Compose function
import {compose} from '@pulsgarney/react-sync-state';

```

### How to code with this

Well, you can do whatever you want to do in a component's lifecycle functions as you would normally do. like this:

```js

import syncWrapper from '@pulsgarney/react-sync-state';

class MyComponent extends React.PureComponent {
  state = {
    data: {},
  }

  componentDidMount() {
    // Fetch Data and save it in the State.
    const res = fetch(some url);
    this.setState({data: res});
  }
  
  render() {}
}

// this will make all instance of this component has the same state afterwards.
export default syncWrapper(MyComponent)

```

Now you know how to get this module into work let's make it a little bit more pro 👇


## Best Practice

Assuming we don't have any State Flow Controlling modules in the current project(Otherwise who needs this😂)

So we'll be in need of a state management 'thing' to manage different sort of States. Like to say we have a Counter Module, and an Article Module. You would definitely don't want to write all the functions and everything into a single javascript file cus it would look really terrible. You know that right? Or just trust me.

So, we would like to separate different State and Functions into different files just like what we did when writing Reducers.

And, since we use the 'Global State' across different places. It's better to write it like a Container that just managing states rather than make it as a Regular Component that also rendering stuff(which could display things differently in different places)

In order to achieve so, we can use the React HOC with Context like this snippet below:

```js

// This is the 'example/src/ColourWrapper.js' in this project.
// It gives you a colour as a global state and a function to change it.

import React from 'react';
import syncWrapper from '@pulsgarney/react-sync-state';


// Create a Context with dynamic contents.
const {Provider, Consumer} = React.createContext({
  color: 'red',
  handleChange: () => {},
});


class _ColourWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = (c) => {
      this.setState({
        color: c,
      });
    };

    // This replaces the content that we want to pass down.
    this.state = {
      color: 'red',
      handleChange: this.handleChange,
    };
  }

  render() {
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    );
  }
}


// Sync this Component
const ColourWrapper = syncWrapper(_ColourWrapper);


// Return the HOC function.
// Don't use arrow function here
//   otherwise it would be a lot of <unknow>s in the React Develop Tools.
const withColour = (Component) => {
  return function withColour(props) {
    return (
      <ColourWrapper>
        <Consumer>
          {
            (value) => <Component {...value} {...props}/>
          }
        </Consumer>
      </ColourWrapper>
    )
  };
};


export {
  withColour,
  ColourWrapper,
};


// This is the 'example/src/Counter.js' in this project.

import React from 'react';
import {withColour} from './ColourWrapper';


// Simplified Codes below, you can work with Classes too.
// The Data is passed in the props.
const Counter = ({color}) => (
  <div>{color}</div>
);

export default withColour(Counter);


// If you got a lot of modules you can also do this.

import React from 'react';
import {withAA} from './AAWrapper';
import {withBB} from './BBWrapper';
import {compose} from '@pulsgarney/react-sync-state';


const MyComponent = (props) => {
  const {...dataFromAA, ...dataFromBB} = props;
  // ...
};


// Do the Magic Merge.
export default compose(
  withAA,
  withBB,
)(MyComponent);

```


## Quick Questions

\# How can I use Async as the Demo does?
- Just Check the `@babel/plugin-transform-runtime`

Thanks for Reading.





