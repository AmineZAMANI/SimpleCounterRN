import {Button} from 'react-native';
import React from 'react';

class Counter extends React.Component {
  state = {
    value: 0,
  };

  increment = () => {
    this.props.increment();
  };

  render() {
    return <Button title="Increment" onPress={this.increment} />;
  }
}

export default Counter;
