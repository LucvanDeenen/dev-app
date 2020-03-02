// Functions
import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';

// Menu Screen
import Menu from './components/Menu/Menu.js';

// Notes Screen
import Notes from './components/Notepad/Notes.js';

// Home Screen
import Home from './components/Home/Home.js';

// Colors Screen
import Colors from './components/ColorChanger/ColorRandom.js';

// Account Screen
import Accounts from './components/Accounts/Accounts.js';

// Login Screen
import Login from './components/Login/Login.js';

// Video Screen
import Videos from './components/Videos/Videos.js';

// Main objects
import Footer from './components/Main/Footer.js';
import styles from './components/Main/styles.js';

export default function App() {
  const [menu, setMenu] = useState(false);
  const [screen, setScreen] = useState('home');

  const [login, setLogin] = useState(true);

  const toggleMenu = () => {
    setMenu(!menu);
  }

  const chooseScreen = val => {
    setScreen(val);
    setMenu(!menu);
  }

  if (login == true) {
    return (
      <View style={styles.app}>
        <Login control={login} />
      </View>
    );
  } 
  
  if (login == false) {
    return (
      // Full menu 
      <View style={styles.app}>
        
        {/* Menu Screen */}
        <Menu control={menu} select={chooseScreen} />

        {/* Main Screen */}
        <View style={styles.containerApp}>
          <Notes control={screen} />
          <Home control={screen} />
          <Accounts control={screen} />
          <Videos control={screen} />
          <Colors control={screen} />
        </View>
        
        {/* Footer */}
        <Footer switch={toggleMenu} control={menu} select={screen} logout={setLogin(!login)}/>

      </View>
    );
  }
}


