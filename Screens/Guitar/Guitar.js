import React, { useState } from 'react';
import { View } from 'react-native';

import styles from './local-styles.js.js';
import globalStyles from '../../components/Main/styles.js';

export default function Guitar(props) {
    if (props.control == 'guitar') {
        return (
            <View style={styles.container}>
                
            </View>
        )
    } else {
        return null
    }
}