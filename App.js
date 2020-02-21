import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Menu from './components/Menu/Menu.js';
import Notes from './components/Notepad/Notes.js';
import Footer from './components/Footer.js';

export default function App() {
  const [nav, setNav] = useState('');

  //nieuwe manier voor uitvoeren function
  const navHandler = (t) => {
    setNav(t);
  }

  return (
    <View style={styles.app}>
      <Menu />
      <Footer /> 
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#ffff',
    flex: 1,
  }
});
