// Functions
import React, { useState } from 'react';
import { View } from 'react-native';

// Components
import Menu from './Screens/Menu/Menu.js';
import Home from './Screens/Home/Home.js';
import Colors from './Screens/ColorChanger/ColorRandom.js';
import Login from './Screens/Login/Login.js';
import Footer from './components/Main/Footer.js';
import Maps from './Screens/Maps/Maps.js';
import Accounts from './Screens/Accounts/Accounts';

// Styling
import styles from './components/Main/styles.js';

// Base64
import { decode, encode } from 'base-64'

if (!global.btoa) { global.btoa = encode }

if (!global.atob) { global.atob = decode }

export default function App() {
  const [colors, setColors] = useState({
    menuColor: '#52AA8A',
    backgroundColor: '#fff',
    buttonColor: '#388659',
    textColor: '#52AA8A',
  })

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

  const logFunc = () => {
    setLogin(!login);
  }

  if (login == true) {
    return (
      <View style={[styles.app, { backgroundColor: colors.backgroundColor }]}>
        <Login control={login}
          log={logFunc}
          colors={colors} />
      </View>
    );
  }

  if (login == false) {
    return (
      <View style={[styles.app, { backgroundColor: colors.backgroundColor }]}>

        <Menu control={menu}
          select={chooseScreen}
          close={toggleMenu}
          current={screen}
          colors={colors} />

        <View style={[styles.containerApp, { backgroundColor: colors.backgroundColor }]}>

          <Home control={screen}
            colors={colors} />

          <Colors control={screen}
            colors={colors} />

          <Maps control={screen}
            colors={colors} />

          <Accounts control={screen}
            colors={colors} />

        </View>

        <Footer switch={toggleMenu}
          control={menu}
          select={screen}
          logout={logFunc}
          settings={toggleMenu}
          colors={colors} />

      </View>
    );
  }
}


