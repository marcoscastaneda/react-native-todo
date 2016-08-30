const React = require('react-native')
const {StyleSheet} = React

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fafafa',
  },
  tableView: {
    backgroundColor: 'blue',
    flexDirection: 'column'
  },
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
    height: 55,
  },
  cell: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
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
})

module.exports = styles
