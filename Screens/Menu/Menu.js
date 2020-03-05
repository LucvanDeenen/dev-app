import React, { useState } from 'react';
import { View, TouchableOpacity, Alert, Text, Modal } from 'react-native';
import { Icon } from 'react-native-elements';

import ActionButton from 'react-native-action-button';

import styles from './local-styles.js';
import globalStyles from '../../components/Main/styles.js';

export default function Menu(props) {
    const menu = [
        {
            id: 1,
            title: 'Apps',
            event: props.switch,
            nameIcon: 'ios-apps',
            typeIcon: 'ionicon'
        },
        {
            id: 2,
            title: 'Settings',
            event: props.settings,
            nameIcon: 'gear',
            typeIcon: 'font-awesome'
        },
        {
            id: 3,
            title: 'Logout',
            event: props.logout,
            nameIcon: 'ios-log-out',
            typeIcon: 'ionicon'
        },
    ]

    if (props.control) {
        return (
            <View style={styles.background}>
                <View style={styles.container}>
                    <ActionButton buttonColor='#388659'
                        renderIcon={() => (
                            <Icon name='ios-menu'
                                type='ionicon'
                                color='#fff' />
                        )}
                        degrees={0}
                        offsetX={0}
                        onPress={props.close}
                        active={true}>
                        <ActionButton.Item onPress={() => { props.select('home') }}
                            hideLabelShadow={true}>
                            <Icon reverse
                                name="ios-home"
                                type='ionicon'
                                color='#52AA8A' />
                        </ActionButton.Item>
                        <ActionButton.Item onPress={() => { props.select('notes') }}>
                            <Icon reverse
                                name='ios-create'
                                type='ionicon'
                                color='#52AA8A' />
                        </ActionButton.Item>
                        <ActionButton.Item onPress={() => props.select('colors')}>
                            <Icon reverse
                                name='ios-color-palette'
                                type='ionicon'
                                color='#52AA8A' />
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

