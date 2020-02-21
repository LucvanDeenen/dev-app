import React, { useState } from 'react';
import { View } from 'react-native';

import Menu from './components/Menu/Menu.js';
import Notes from './components/Notepad/Notes.js';
import Footer from './components/Footer.js';
import styles from './components/Styles.js';

export default function App() {
  const [nav, setNav] = useState('');

  //nieuwe manier voor uitvoeren function
  const navHandler = (t) => {
    setNav(t);
  }

  return (
    <View style={styles.app}>
      <Menu />
      {/* <Notes /> */}
      <Footer /> 
    </View>
  );
}

