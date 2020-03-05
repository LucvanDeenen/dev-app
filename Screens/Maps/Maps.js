import React, { useState } from 'react';
import { View } from 'react-native';

import styles from './local-styles.js';
import globalStyles from '../../components/Main/styles.js';

export default function Maps(props) {
    if (props.control == 'maps') {
        return (
            <View style={styles.container}>
                
            </View>
        )
    } else {
        return null
    }
}