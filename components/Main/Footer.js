import React, { useState } from 'react';
import { View } from 'react-native';
import { Icon, Text } from 'react-native-elements';

import ActionButton from 'react-native-action-button';

import styles from './styles.js';

export default function Footer(props) {
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
        // {
        //     id: 3,
        //     title: 'Logout',
        //     event: props.logout,
        //     nameIcon: 'ios-log-out',
        //     typeIcon: 'ionicon'
        // },
    ]

    if (!props.control) {
        return (
            <View style={styles.containerFooter}>
                <View style={styles.contentFooter}>
                    <ActionButton buttonColor={props.colors.buttonColor}
                        renderIcon={() => (
                            <Icon name='ios-menu'
                                type='ionicon'
                                color='#fff' />
                        )}
                        degrees={0}
                        offsetX={0}>
                        {
                            menu.map((item, i) => (
                                <ActionButton.Item key={item.id} onPress={() => {
                                    item.event();
                                }}
                                    title={item.title}
                                    spaceBetween={-40}>
                                    <Icon color='#fff'
                                        name={item.nameIcon}
                                        type={item.typeIcon} />
                                </ActionButton.Item>
                            ))
                        }
                    </ActionButton>
                </View>
            </View>
        );
    } else {
        return null
    }
}


