import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Divider } from 'react-native-elements';

import styles from './local-styles.js';
import globalStyles from '../Main/styles.js';

const Home = props => {
    if (props.control == 'home') {
        return (
            <View style={styles.backgroundHome}>
                <View style={styles.headerHome}>
                </View>
                <View style={styles.contentHome}>
                    <Text h2 style={globalStyles.textStandardDark}> Light Watch </Text>
                    <Text h3 style={globalStyles.textStandardDark}> - Home - </Text>
                    <Divider style={{margin: 4 }}></Divider>
                    <Text h4 style={globalStyles.textStandardDarkSide}> Patch notes: </Text>
                </View>
            </View>
        );
    } else {
        return null;
    }
}
export default Home;