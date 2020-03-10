import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Image } from 'react-native-elements';

import styles from './local-styles.js';
import globalStyles from '../../components/Main/styles.js';

const Home = props => {
    if (props.control == 'home') {
        return (
            <View style={styles.backgroundHome}>
                <View style={[styles.headerHome, { borderColor: props.colors.itemColor, backgroundColor: props.colors.itemColor }]}>
                    {/* <Text style={[globalStyles.textStandard, { color: props.colors.headTextColor }]}> •  Home Page  • </Text> */}
                </View>
                <View style={styles.contentHome}>
                    <Image style={{ width: 450, height: 700 }}
                        source={require('../../assets/dark-mode-icon-cutout.png')} />
                </View>
            </View>
        );
    } else {
        return null;
    }
}
export default Home;