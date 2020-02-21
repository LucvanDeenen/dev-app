import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon, ThemeConsumer } from 'react-native-elements';

import Menu from './components/Menu/Menu.js';
import Notes from './components/Notepad/Notes.js';
import Footer from './components/Footer.js';
import styles from './components/Styles.js';

export default function App() {
  const [toggle, setToggle] = useState(false);

  const toggleFunc = () => {
    setToggle(!toggle);
  }

  return (
    <View style={styles.app}>
      <Menu control={toggle}/>
      {/* <Notes /> */}
      <Footer switch={toggleFunc} control={toggle}/>
    </View>
  );
}


