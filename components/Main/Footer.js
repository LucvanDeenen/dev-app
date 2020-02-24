import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './styles.js';

const Notes = props => {
    if (!props.control) {
        return (
            <View style={styles.containerFooter}>
                <View style={styles.appFooter}>
                    <TouchableOpacity>
                        <Icon reverse
                            onPress={props.switch}
                            name="ios-home"
                            type='ionicon'
                            color='#52AA5E'
                            raised />
                    </TouchableOpacity>
                </View>
            </View>
        );
    } else {
        return (
            <View style={styles.containerFooter}>
                <View style={styles.appFooter}>
                    <TouchableOpacity>
                        <Icon reverse
                            onPress={props.switch}
                            name="ios-arrow-back"
                            type='ionicon'
                            color='#52AA5E'
                            raised />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default Notes;


