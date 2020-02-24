import React, { useState } from 'react';
import { View, Image } from 'react-native';

import styles from '../Styles.js';

const Home = props => {
    if (props.control == 'home') {
        return (
            <View style={styles.contentHome}>
                <Image source={require('./background.jpeg')} style={styles.backgroundImage}></Image>
            </View>
        );
    } else {
        return null;
    }    
}
export default Home;