import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from '../../Screens/Maps/local-styles';
import globalStyles from '../Main/styles.js';
import { Icon } from 'react-native-elements';


export default function Header(props) {
    return (
        <View style={[styles.header, { backgroundColor: props.colors.itemColor }]}>
            <View style={{ flex: 1 }}>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={[globalStyles.textStandard, { color: props.colors.headTextColor }]}>Maps</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'row' }}>
                <TouchableOpacity onPress={props.toggleMarker}>
                    <Icon reverse
                        raised
                        color={props.placeColor}
                        name='ios-pin'
                        type='ionicon' />
                </TouchableOpacity>

                <TouchableOpacity onPress={props.toggleLine}>
                    <Icon reverse
                        raised
                        color={props.drawColor}
                        name='ios-brush'
                        type='ionicon' />
                </TouchableOpacity>
            </View>
        </View>
    )

}