import React, { Component } from 'react';
import {
 AppRegistry,
 StyleSheet,
 NavigatorIOS
} from 'react-native';

import RootView from './core/views/RootView'

class ReactTodo extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.navBar}
        initialRoute={{
          title: 'React Todos',
          component: RootView,
          rightButtonTitle: 'Add',
          barTintColor: '#FFF',
          tintColor: '#c92c5e',
          shadowHidden: false,
          titleTextColor: '#c92c5e'
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
