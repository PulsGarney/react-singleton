import React from 'react';
import syncWrapper from '@pulsgarney/react-sync-state';


const {Provider, Consumer} = React.createContext({
  count: 0,
  handleCount: () => {},
  handleCountAsync: () => {},
});


class _CountWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.handleCount = (num) => {
      this.setState(
        (state) => ({
          count: state.count += num,
        })
      );
    };

    this.handleCountAsync = async (num) => {
      await new Promise(
        (resolve) => setTimeout(resolve, 1000)
      );
      this.setState(
        (state) => ({
          count: state.count += num,
        })
      );
    };

    this.state = {
      count: 0,
      handleCount: this.handleCount,
      handleCountAsync: this.handleCountAsync,
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


const CountWrapper = syncWrapper(_CountWrapper);


const withCount = (Component, sync = true) => (
  function withCount(props) {
    return (
      sync
        ? (
          <CountWrapper>
            <Consumer>
              {
                (value) => <Component {...value} {...props}/>
              }
            </Consumer>
          </CountWrapper>
        )
        : (
          <_CountWrapper>
            <Consumer>
              {
                (value) => <Component {...value} {...props}/>
              }
            </Consumer>
          </_CountWrapper>
        )
    )
  }
);


export {
  withCount,
  CountWrapper,
};
