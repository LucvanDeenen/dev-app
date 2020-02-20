import React, { useState } from 'react';
import { StyleSheet, View, Alert, Text, Dimensions } from 'react-native';
import Menu from './components/Menu.js';

export default function App() {
  const [textIn, setTextIn] = useState('');

  // //nieuwe manier voor uitvoeren function
  const textHandler = (t) => {
    setTextIn(t);
  }

  // //uitvoeren old school function
  function clicker() {
    Alert.alert('button pressed', 'great job!', Button);
    Alert.alert('next', textIn, Button);
  }

  return (
    <View style={styles.app}>
      <View style={styles.container}>
        <Menu />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#c9c7c7'
  },
  container: {
    borderRadius: 10,
    height: '90%',
    padding: 10,
    marginTop: 40,
    margin: 30,
    backgroundColor: '#a8a8a8',
  },
});
