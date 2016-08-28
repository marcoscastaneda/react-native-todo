import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Text
} from 'react-native';

class RootView extends Component {

  _buttonDidTouch(person) {
    console.log('tapped')
  }

  render() {
    return (
      <Text>
        Hello there
      </Text>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  button: {
    height: 50,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 3,
    alignItems: 'center',
    backgroundColor: 'black',
    // color: '#FFF'
  },
  buttonTitle: {
    fontFamily: 'System',
    fontWeight: '500',
    fontSize: 18,
    color: '#FFF',
    marginTop: 6
  }
});

module.exports = RootView
