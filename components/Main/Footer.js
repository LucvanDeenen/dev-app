import React, { useState } from 'react';
import { View } from 'react-native';
import { Icon, Text } from 'react-native-elements';

import ActionButton from 'react-native-action-button'

import styles from './styles.js';

const Footer = props => {
    const [collapse, setCollapse] = useState(false);

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
            event: null,
            nameIcon: 'gear',
            typeIcon: 'font-awesome'
        },
        {
            id: 3,
            title: 'Logout',
            event: props.logout,
            nameIcon: 'ios-exit',
            typeIcon: 'ionicon'
        },
    ]

    if (!props.control) {
        return (
            <View style={styles.containerFooter}>
                <ActionButton buttonColor="#52AA5E">
                    {
                        menu.map((item, i) => (
                            <ActionButton.Item title={item.title}
                                onPress={item.event}>
                                <Icon reverse
                                    color='#52AA5E'
                                    raised
                                    name={item.nameIcon}
                                    type={item.typeIcon} />
                            </ActionButton.Item>
                        ))
                    }
                </ActionButton>
            </View>
        );
    } else {
        return null
    }
}

export default Footer;


