import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from '../../Screens/Notes/local-styles.js';
import globalStyles from '../Main/styles.js';

export default function Header(props) {
    return (
        <View style={styles.head}>
            <View style={styles.leftHead}>
            </View>
            <View style={styles.middleHead}>
                <Text style={globalStyles.textStandard}>Notes</Text>
            </View>
            <View style={styles.rightHead}>
            </View>
        </View>
    )
}
