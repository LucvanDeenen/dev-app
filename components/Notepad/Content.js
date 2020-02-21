import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from '../Styles.js';

const Content = props => {
    return (
        <View style={styles.contentText}>
            <Text>
                Wow
                </Text>
        </View>
    );
}
export default Content;