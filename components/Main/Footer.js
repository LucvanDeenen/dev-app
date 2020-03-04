import React, { useState } from 'react';
import { View } from 'react-native';
import { Icon, Text } from 'react-native-elements';

import ActionButton from 'react-native-action-button';

import styles from './styles.js';

const Footer = props => {
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

    if (!props.control) {
        return (
            <View style={styles.containerFooter}>
                <View style={styles.contentFooter}>
                    <ActionButton buttonColor='rgba(76,53,164,34)'
                        offsetX={0}>
                        {
                            menu.map((item, i) => (
                                <ActionButton.Item key={item.id} onPress={() => {
                                    item.event()
                                }}>
                                    <Icon reverse
                                        color='#52AA8A'
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

export default Footer;


