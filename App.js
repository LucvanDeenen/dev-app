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
    <View>
      <View style={styles.container}>
        <Menu />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '90%',
    marginTop: 40,
    margin: 30,
    backgroundColor: '#fff',
  },
});
