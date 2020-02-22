import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

import styles from '../Styles.js';

const Home = props => {
    if (props.control == 'home') {
        return (
            <View style={styles.contentHome}>
                <Text>Wow</Text>
            </View>
        );
    } else {
        return null;
    }    
}
export default Home;