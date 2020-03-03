import React, { useState } from 'react';
import { View, TouchableOpacity, Alert, Text, Modal } from 'react-native';
import { Icon } from 'react-native-elements';

import ActionButton from 'react-native-circular-action-menu';

import styles from './local-styles.js';
import globalStyles from '../Main/styles.js';

const Menu = props => {
    if (props.control) {
        return (
            <View style={styles.background}>
                <View style={styles.container}>
                    <ActionButton buttonColor="#388659"
                        position="right"
                        outRangeScale="0.93"
                        btnOutRange="#388659"
                        onPress={props.close}
                        active="true"
                        autoInactive="false"
                        radius='250'>
                        <ActionButton.Item buttonColor='#3498db' title="Home" onPress={() => { props.select('home') }}>
                            <Icon reverse
                                name="ios-home"
                                type='ionicon'
                                color='#52AA5E'
                                raised />
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor='#9b59b6' title="Notes" onPress={() => { props.select('notes') }}>
                            <Icon reverse
                                name='ios-create'
                                type='ionicon'
                                color='#52AA5E'
                                raised />
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor='#1abc9c' title="Accounts" onPress={() => { props.select('accounts') }}>
                            <Icon reverse
                                name='ios-key'
                                type='ionicon'
                                color='#52AA5E'
                                raised />
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor='#1abc9c' title="Videos" onPress={() => { props.select('videos') }}>
                            <Icon reverse
                                name='youtube'
                                type='feather'
                                color='#52AA5E'
                                raised />
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor='#1abc9c' title="Colors" onPress={() => props.select('colors')}>
                            <Icon reverse
                                name='ios-color-palette'
                                type='ionicon'
                                color='#52AA5E'
                                raised />
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor='#1abc9c' title="Camera" onPress={() => { props.select('home') }}>
                            <Icon reverse
                                name='ios-camera'
                                type='ionicon'
                                color='#52AA5E'
                                raised />
                        </ActionButton.Item>
                    </ActionButton>
                </View>
            </View>
        );
    }
    else {
        return null;
    }

}

export default Menu

