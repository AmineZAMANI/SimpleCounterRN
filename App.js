import React from 'react';

import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';

import Counter from './src/screens/Counter';
import Watcher from './src/screens/WatcherOne';
import WatcherTwo from './src/screens/WatcherTwo';

export default class App extends React.Component {
  state = {
    value: 0,
  };

  increment = () => {
    this.setState({value: this.state.value + 1});
  };

  render() {
    console.log('render');
    return (
      <View>
        <Counter value={this.state.value} increment={this.increment} />
        <Watcher value={this.state.value} />
        <WatcherTwo value={this.state.value} />
      </View>
    );
  }
}
