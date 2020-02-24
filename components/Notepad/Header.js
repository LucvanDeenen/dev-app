import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './local-styles.js';
import globalStyles from '../Main/styles.js';

const Header = props => {
    return (
        <View style={styles.head}>
            <View style={styles.leftHead}>
            </View>
            <View style={styles.middleHead}>
                <Text style={globalStyles.textStandard}>Notities</Text>
            </View>
            <View style={styles.rightHead}>
                <TouchableOpacity>
                    <Icon reverse
                        name="ios-add"
                        type='ionicon'
                        color='#52AA8A' />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Header;
