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
    <View style={styles.container}>
      <Menu/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '90%',
    margin: 30,
    backgroundColor: '#fff',
  },
});
