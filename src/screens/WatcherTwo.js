import {Text, StyleSheet} from 'react-native';
import React from 'react';

class WatcherTwo extends React.Component {
  render() {
    return <Text style={styles.counterWatcherOne}>{this.props.value}</Text>;
  }
}

const styles = StyleSheet.create({
  counterWatcherOne: {
    fontSize: 40,
    textAlign: 'center',
  },
});

export default WatcherTwo;
