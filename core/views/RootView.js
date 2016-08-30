import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text
} from 'react-native';


import ActionButton from './ActionButton'
import TableView from './TableView'

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fafafa',
  },
  tableView: {
    backgroundColor: 'blue',
    flexDirection: 'column'
  }
});

module.exports = RootView
