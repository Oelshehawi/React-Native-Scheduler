/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Login from './src/screens/Login';

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Login />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'blue',
    flex: 1,
  },
});

export default App;
