// Functions
import React, { useState } from 'react';
import { View } from 'react-native';

// Components
import Menu from './Screens/Menu/Menu.js';
import Notes from './Screens/Notes/Notes.js';
import Home from './Screens/Home/Home.js';
import Colors from './Screens/ColorChanger/ColorRandom.js';
import Login from './Screens/Login/Login.js';
import Footer from './components/Main/Footer.js';
import Maps from './Screens/Maps/Maps.js';
import Tabs from './Screens/Tabs/Tabs.js';

// Styling
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

  const logFunc = () => {
    setLogin(!login);
  }

  if (login == true) {
    return (
      <View style={styles.app}>
        <Login control={login} log={logFunc} />
      </View>
    );
  }

  if (login == false) {
    return (
      <View style={styles.app}>
        <Menu control={menu} select={chooseScreen} close={toggleMenu} current={screen}/>
        <View style={styles.containerApp}>
          <Notes control={screen} />
          <Home control={screen} />
          <Colors control={screen} />
          <Maps control={screen}/>
          <Tabs control={screen}/>
        </View>
        <Footer switch={toggleMenu} control={menu} select={screen} logout={logFunc} settings={toggleMenu} /> 
      </View>
    );
  }
}


