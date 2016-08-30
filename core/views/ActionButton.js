import React, {Component} from 'react';
import ReactNative from 'react-native';
const { StyleSheet, Text, View, TouchableHighlight} = ReactNative;

const styles = require('../styles.js')

class ActionButton extends Component {
  render() {
    return (
      <View>
        <TouchableHighlight
          underlayColor="#e05481"
          style={styles.action}
          onPress={this.props.onPress}>
          <Text style={styles.actionText}>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = ActionButton;
