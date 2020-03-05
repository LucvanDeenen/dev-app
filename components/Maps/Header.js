import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from '../../Screens/Maps/local-styles';
import globalStyles from '../Main/styles.js';


export default function Header() {
    return (
        <View style={styles.header}>
            <View style={{ flex: 1 }}>
                
            </View>
            <View style={{ flex: 1 }}>
                <Text style={globalStyles.textStandard}>Maps</Text>
            </View>
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.menu}></TouchableOpacity>
            </View>
        </View>
    )
}