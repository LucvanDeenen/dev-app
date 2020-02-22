import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';

import Menu from './components/Menu/Menu.js';
import Notes from './components/Notepad/Notes.js';
import Home from './components/Home/Home.js';

import Footer from './components/Footer.js';
import styles from './components/Styles.js';

export default function App() {
  const [menu, setMenu] = useState(false);
  const [screen, setScreen] = useState('home');

  const toggleMenu = () => {
    setMenu(!menu);
  }

  const choseScreen = val => {
    setScreen(val);
    setMenu(!menu);
  }

  return (
    <View style={styles.app}>
      <Menu control={menu} select={choseScreen}/>

      <Notes control={screen}/>
      <Home control={screen}/>

      <Footer switch={toggleMenu} control={menu} select={screen}/>
    </View>
  );
}


