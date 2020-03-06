import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from '../../Screens/Maps/local-styles';
import globalStyles from '../Main/styles.js';
import { Icon } from 'react-native-elements';


export default function Header(props) {
    return (
        <View style={styles.header}>
            <View style={{ flex: 1 }}>

            </View>
            <View style={{ flex: 1 }}>
                <Text style={globalStyles.textStandard}>Maps</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                <TouchableOpacity onPress={props.toggle}>
                    <Icon reverse
                        raised
                        color='#388659'
                        name='ios-brush'
                        type='ionicon' />
                </TouchableOpacity>
            </View>
        </View>
    )
}