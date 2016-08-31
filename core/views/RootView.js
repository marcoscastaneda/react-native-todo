import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text
} from 'react-native';
import Realm from 'realm'
import styles from '../styles.js'
import ActionButton from './ActionButton'
import TableView from './TableView'

class RootView extends Component {

  constructor(props) {
    super(props);

    console.log("RV props = ", this.props)

  }

  render() {
    return (
      <View style={styles.container}>
        <TableView data={this.props.realm.objects('Todos')} realm={this.props.realm} style={styles.tableView} />
        <ActionButton title="Add" onPress={() => console.log('add') }/>
      </View>
    )
  }

}

module.exports = RootView
