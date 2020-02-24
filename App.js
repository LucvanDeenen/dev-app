import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';

import Menu from './components/Menu/Menu.js';
import Notes from './components/Notepad/Notes.js';
import Home from './components/Home/Home.js';
import Accounts from './components/Accounts/Accounts.js';
import Videos from './components/Videos/Videos.js';

import Footer from './components/Main/Footer.js';
import styles from './components/Main/styles.js';

export default function App() {
  const [menu, setMenu] = useState(false);
  const [screen, setScreen] = useState('home');

  const toggleMenu = () => {
    setMenu(!menu);
  }

  const chooseScreen = val => {
    setScreen(val);
    setMenu(!menu);
  }

  return (
    <View style={styles.app}>
      <Menu control={menu} select={chooseScreen}/>

      <Notes control={screen}/>
      <Home control={screen}/>
      <Accounts control={screen}/>
      <Videos control={screen}/>

      <Footer switch={toggleMenu} control={menu} select={screen}/>
    </View>
  );
}


