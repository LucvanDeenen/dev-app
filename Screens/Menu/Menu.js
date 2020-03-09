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
            title: 'Home',
            event: 'home',
            nameIcon: 'ios-home',
            typeIcon: 'ionicon'
        },
        {
            id: 2,
            title: 'Maps',
            event: 'maps',
            nameIcon: 'ios-map',
            typeIcon: 'ionicon'
        },
        {
            id: 3,
            title: 'Colors',
            event: 'colors',
            nameIcon: 'ios-color-palette',
            typeIcon: 'ionicon'
        },
        {
            id: 4,
            title: 'Accounts',
            event: 'accounts',
            nameIcon: 'ios-key',
            typeIcon: 'ionicon'
        },
    ]

    if (props.control) {
        return (
            <View style={styles.background}>
                <View style={styles.container}>
                    <ActionButton buttonColor={props.colors.buttonColor}
                        renderIcon={() => (
                            <Icon name='ios-menu'
                                type='ionicon'
                                color='#fff' />
                        )}
                        degrees={0}
                        offsetX={0}
                        onPress={props.close}
                        active={true}>
                        {
                            menu.map(
                                item => {
                                    if (props.current != item.event) return (
                                        <ActionButton.Item key={item.id} onPress={() => { props.select(item.event); }}
                                            title={item.title}
                                            spaceBetween={-40}>
                                            <Icon color='#fff'
                                                name={item.nameIcon}
                                                type={item.typeIcon} />
                                        </ActionButton.Item>
                                    )
                                }
                            )
                        }
                    </ActionButton>
                </View>
            </View>
        );
    }
    else {
        return null;
    }

}

