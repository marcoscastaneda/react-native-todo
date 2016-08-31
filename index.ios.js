import React, { Component } from 'react';
import {
 AppRegistry,
 StyleSheet,
 NavigatorIOS
} from 'react-native';
import Realm from 'realm'
import RootView from './core/views/RootView'
import AddItemView from './core/views/AddItemView'

class ReactTodo extends Component {

  constructor(props) {
    super(props)
    this._handleAddButtonPress = this._handleAddButtonPress.bind(this);

    this.state = {
      realm: new Realm({
        schema: [{name: 'Todos', properties: {name: 'string', done: 'bool'}}]
      })
    }
  }

  _handleAddButtonPress() {
    console.log(this.props)
    console.log(this.refs)
    // this.refs.navigator.push({
    //   title: 'Add Todo',
    //   component: TableView
    // })
  }

  render() {
    return (
      <NavigatorIOS
        ref='nav'
        style={styles.navBar}
        initialRoute={{
          title: 'React Todos',
          component: RootView,
          passProps: {realm: this.state.realm},
          leftButtonTitle: 'Delete',
          barTintColor: '#FFF',
          // tintColor: '',
          shadowHidden: false,
          titleTextColor: '#c92c5e',
          onLeftButtonPress: () => {
            this.state.realm.write(() => {
              this.state.realm.delete(this.state.realm.objects('Todos'))
          })
        }
            // this.refs.nav.navigator.push({
            //                title: "Add Item",
            //                component: AddItemView,
            //                leftButtonTitle: 'Close',
            //                onLeftButtonPress: () => {this.refs.nav.navigator.pop();}
            //              });
        }} />
    );
  }
}

var styles = StyleSheet.create({
  navBar: {
    flex: 1,
  },
});

AppRegistry.registerComponent('ReactTodo', () => ReactTodo);
