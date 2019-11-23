import React from 'react';
import { StyleSheet, View } from 'react-native';

import ListView from './src/ListView'

const App = () => {
  return (
    <View style={styles.container}>
      <ListView />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 10,
    paddingLeft: 2,
    paddingRight: 2,
    backgroundColor: '#F8F8F8',
  }
})

export default App