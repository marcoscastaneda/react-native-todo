import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text
} from 'react-native';

import ActionButton from './ActionButton'
import TableView from './TableView'

const styles = require('../styles.js')

class RootView extends Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        <TableView style={styles.tableView}/>
        <ActionButton title="Add" onPress={() => console.log('add') }/>
      </View>
    )
  }

}

module.exports = RootView
