import React from 'react';
import syncWrapper from '@pulsgarney/react-sync-state';


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


const ColourWrapper = syncWrapper(_ColourWrapper);


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
