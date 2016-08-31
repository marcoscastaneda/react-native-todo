import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  RecyclerViewBackedScrollView,
  Text
} from 'react-native';
import { ListView } from 'realm/react-native';
import styles from '../styles.js'

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class TableView extends Component {

  // On cell touch
  _rowDidTouch(data) {
    console.log(this.props.data)

    this.props.realm.write(() => {
      this.props.realm.create('Todos', {name: 'Test', done: false});
    })

    this.state = {
      dataSource: ds.cloneWithRows(this.props.data)
    }

    this.forceUpdate()
  }

  constructor(props) {
    super(props)

    this.state = {
      dataSource: ds.cloneWithRows(this.props.data)
    }
  }

  render() {
    console.log("this data = ", this.state)
    return (
      <ListView
        ref="listView"
        dataSource={this.state.dataSource}
        renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
        renderRow={(data) => { return this._renderRow(data) }}
        renderSeparator={this._renderSeparator}>

        <StatusBar barStyle={'light-content'} />

      </ListView>
    )
  }

  _renderRow(cell) {
    console.log("RENDER")
    return (
      <TouchableOpacity style={styles.cell} onPress={(event) => this._rowDidTouch(cell) }>
        <Text style={styles.cellTitle}>
          {cell.name}
        </Text>
        <View style={{flex: 1}} />
        <Text name="chevron-right" size={12} style={styles.cellIcon} />
      </TouchableOpacity>
    )
  }

  _renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
   return (
     <View
       key={`${sectionID}-${rowID}`}
       style={{
         height: 1,
         backgroundColor: '#dfdfdf',
       }}
     />
   );
  }

}

module.exports = TableView
