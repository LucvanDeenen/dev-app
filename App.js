import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';

import Menu from './components/Menu/Menu.js';
import Notes from './components/Notepad/Notes.js';
import Footer from './components/Footer.js';
import styles from './components/Styles.js';

export default function App() {
  const [toggle, setToggle] = useState(false);
  const [screen, setScreen] = useState('');

  const toggleFunc = () => {
    setToggle(!toggle);
    if(!toggle) {
      setScreen('');
    }
  }

  const choseScreen = val => {
    setScreen(val);
    toggleFunc();
  }

  return (
    <View style={styles.app}>
      <Menu control={toggle} select={choseScreen}/>
      <Notes control={screen}/>
      <Footer switch={toggleFunc} control={toggle} select={screen}/>
    </View>
  );
}


