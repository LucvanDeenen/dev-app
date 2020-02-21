import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Menu from './components/Menu.js';
import Notes from './components/Notepad/Notes.js';

export default function App() {
  const [nav, setNav] = useState('');

  //nieuwe manier voor uitvoeren function
  const navHandler = (t) => {
    setNav(t);
  }

  return (
    <View style={styles.app}>
      <View style={styles.container}>
        {/* <Menu /> */}
        <Notes />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#fff'
  },
  container: {
    borderRadius: 10,
    height: '95%',
    padding: 5,
    marginTop: 30,
    marginHorizontal: 15,
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: { height: 3, width: 3 },
    shadowOpacity: 1,
    shadowRadius: 1,
    backgroundColor: '#a8a8a8',
  },
});
