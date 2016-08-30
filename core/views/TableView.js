import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ListView,
  RecyclerViewBackedScrollView,
  Text
} from 'react-native';

const styles = require('../styles.js')

var mockData = [
  {firstName: "John"},
  {firstName: "Lorem"},
  {firstName: "Ipsum"},
  {firstName: "Doe"},
  {firstName: "Dell"},
  {firstName: "Casey"},
  {firstName: "Dan"},
  {firstName: "Rob"},
];

class TableView extends Component {

  // On cell touch
  _rowDidTouch(data) {

    var w = [{firstName: 'peter'}]
    this.state.dataSource.cloneWithRows(w);

    console.log(mockData)

    console.log(this.state.dataSource)
    console.log(this.refs.listView)
  }

  constructor(props) {
    super(props)

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows(mockData)
    }
  }

  render() {
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
    return (
      <TouchableOpacity style={styles.cell} onPress={(event) => this._rowDidTouch(cell) }>
        <Text style={styles.cellTitle}>
          {cell.firstName}
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
