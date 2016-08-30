import React, {Component} from 'react';
import ReactNative from 'react-native';
const { StyleSheet, Text, View, TouchableHighlight} = ReactNative;

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


const styles = StyleSheet.create({
  actionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  action: {
    backgroundColor: '#c92c5e',
    borderColor: 'transparent',
    justifyContent: 'center',
    height: 55
  },
});

module.exports = ActionButton;
