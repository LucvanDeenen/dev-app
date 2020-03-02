import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Icon, Divider } from 'react-native-elements';

import styles from './styles.js';

const Notes = props => {
    if (!props.control) {
        return (
            <View style={styles.containerFooter}>
                <Divider style={{
                    margin: 2,
                    height: 2,
                    backgroundColor: '#52AA8A',
                    shadowColor: 'rgba(0,0,0, 0.2)',
                    shadowOffset: { height: 1, width: 1 },
                    shadowOpacity: 1,
                    shadowRadius: 1,
                }} />
                <View style={styles.appFooter}>
                    <TouchableOpacity
                        onPress={props.switch}>
                        <Icon reverse
                            name="ios-home"
                            type='ionicon'
                            color='#52AA5E'
                            raised />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon reverse
                            name="gear"
                            type='font-awesome'
                            color='#52AA5E'
                            raised />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon reverse
                            name="comment"
                            type='font-awesome'
                            color='#52AA5E'
                            raised />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon reverse
                            name="ios-person"
                            type='ionicon'
                            color='#52AA5E'
                            raised />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={props.logout}>
                        <Icon reverse
                            name="ios-exit"
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
                <Divider style={{
                    margin: 2,
                    height: 2,
                    backgroundColor: '#52AA8A',
                    shadowColor: 'rgba(0,0,0, 0.2)',
                    shadowOffset: { height: 1, width: 1 },
                    shadowOpacity: 1,
                    shadowRadius: 1,
                }} />
                <View style={styles.appFooter}>
                    <TouchableOpacity
                        onPress={props.switch}>
                        <Icon reverse
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


