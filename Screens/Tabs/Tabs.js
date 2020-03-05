import React, { useState } from 'react';
import { View } from 'react-native';

import styles from './local-styles.js';
import globalStyles from '../../components/Main/styles.js';

export default function Tabs(props) {
    if (props.control == 'tabs') {
        return (
            <View style={styles.container}>
                
            </View>
        )
    } else {
        return null
    }
}