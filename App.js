// Functions
import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';

// Menu Screen
import Menu from './components/Menu/Menu.js';

// Notes Screen
import Notes from './components/Notepad/Notes.js';
 
// Home Screen
import Home from './components/Home/Home.js';

// Account Screen
import Accounts from './components/Accounts/Accounts.js';

// Video Screen
import Videos from './components/Videos/Videos.js';

// Main objects
import Footer from './components/Main/Footer.js';
import styles from './components/Main/styles.js';

export default function App() {
  const [menu, setMenu] = useState(false);
  const [screen, setScreen] = useState('home');

  const [addAccount, setAddAccount] = useState(false);

  const addAccountFunc = () => {
    setAddAccount(!addAccount);
    console.log(addAccount);
  }

  const toggleMenu = () => {
    setMenu(!menu);
  }

  const chooseScreen = val => {
    setScreen(val);
    setMenu(!menu);
  }

  return (
    <View style={styles.app}>
      <Menu control={menu} select={chooseScreen} />

      <View style={styles.containerApp}>
        <Notes control={screen} />
        <Home control={screen} />
        <Accounts control={screen} addAcc={addAccountFunc} addAccControl={addAccount}/>
        <Videos control={screen} />
      </View>

      <Footer switch={toggleMenu} control={menu} select={screen} />
    </View>
  );
}


