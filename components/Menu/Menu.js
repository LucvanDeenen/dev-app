import React, { useState } from 'react';
import { View, TouchableOpacity, Alert, Text, Modal } from 'react-native';
import { Icon } from 'react-native-elements';

import ActionButton from 'react-native-action-button';

import styles from './local-styles.js';
import globalStyles from '../Main/styles.js';

const Menu = props => {
    if (props.control) {
        return (
            <View style={styles.background}>
                <View style={styles.container}>
                    <ActionButton buttonColor="#52AA5E"
                        offsetX={0}
                        onPress={props.close}
                        active={true}>
                        <ActionButton.Item onPress={() => { props.select('home') }}
                            hideLabelShadow={true}>
                            <Icon reverse
                                name="ios-home"
                                type='ionicon'
                                color='#52AA5E' />
                        </ActionButton.Item>
                        <ActionButton.Item onPress={() => { props.select('notes') }}>
                            <Icon reverse
                                name='ios-create'
                                type='ionicon'
                                color='#52AA5E' />
                        </ActionButton.Item>
                        {/* <ActionButton.Item onPress={() => { props.select('accounts') }}>
                            <Icon reverse
                                name='ios-key'
                                type='ionicon'
                                color='#52AA5E' />
                        </ActionButton.Item> */}
                        {/* <ActionButton.Item onPress={() => { props.select('videos') }}>
                            <Icon reverse
                                name='youtube'
                                type='feather'
                                color='#52AA5E' />
                        </ActionButton.Item> */}
                        <ActionButton.Item onPress={() => props.select('colors')}>
                            <Icon reverse
                                name='ios-color-palette'
                                type='ionicon'
                                color='#52AA5E' />
                        </ActionButton.Item>
                        {/* <ActionButton.Item onPress={() => { props.select('home') }}>
                            <Icon reverse
                                name='ios-camera'
                                type='ionicon'
                                color='#52AA5E' />
                        </ActionButton.Item> */}
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

