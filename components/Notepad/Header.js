import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from '../Styles.js';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.head}>
                <View style={styles.leftHead}>
                    <TouchableOpacity>
                        <Icon reverse
                            name="ios-home"
                            type='ionicon'
                            color='#c97630' />
                    </TouchableOpacity>
                </View>
                <View style={styles.middleHead}>
                    <Text style={styles.textStandard}>Notities</Text>
                </View>
                <View style={styles.rightHead}>
                    <TouchableOpacity>
                        <Icon reverse
                            name="ios-add"
                            type='ionicon'
                            color='#c97630' />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
