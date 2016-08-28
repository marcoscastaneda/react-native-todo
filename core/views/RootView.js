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

const mockData = [
  {firstName: "John"},
  {firstName: "John"},
  {firstName: "John"},
  {firstName: "John"},
];

class RootView extends Component {

  _buttonDidTouch(person) {
    person.firstName = person.firstName + '?';

    alert("hi" + person);
    console.log('Tapped on cell', person)
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
        renderRow={(person) => { return this._renderPersonRow(person) }}>
        <StatusBar barStyle={'light-content'} />

      </ListView>
    )
  }

  _renderPersonRow(person) {
    return (
      <TouchableOpacity style={styles.cell} onPress={(event) => this._buttonDidTouch(person) }>
        <Text style={styles.cellPhoto}>
          {person.firstName}
        </Text>
        <Text style={styles.cellTitle}>
          {person.firstName}
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
         height: adjacentRowHighlighted ? 4 : 1,
         backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
       }}
     />
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  cell: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
  },
  cellPhoto: {
    fontSize: 40,
    marginLeft: 9
  },
  cellTitle: {
    fontSize: 17,
    marginLeft: 9
  },
  cellIcon: {
    color: 'lightgray',
    height: 12,
    width: 12,
    marginRight: 12
  }
});


module.exports = RootView
