import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, styles.pink]}>
        <Text>Hello, world!</Text>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  pink: {
    backgroundColor: 'pink',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  safeArea: {
    flex: 2
  }
});

export default App;