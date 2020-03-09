import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Divider } from 'react-native-elements';

import styles from './local-styles.js';
import globalStyles from '../../components/Main/styles.js';

const Home = props => {
    if (props.control == 'home') {
        return (
            <View style={styles.backgroundHome}>
                <View style={[styles.headerHome, { borderColor: props.colors.itemColor, backgroundColor: props.colors.itemColor }]}>
                    <Text style={[globalStyles.textStandard, { color: props.colors.headTextColor }]}> Light Watch • Home Page </Text>
                </View>
                <View style={styles.contentHome}>

                </View>
            </View>
        );
    } else {
        return null;
    }
}
export default Home;