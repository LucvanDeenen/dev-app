import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon, Text, ListItem } from 'react-native-elements';

import styles from './local-styles.js';
import globalStyles from '../Main/styles.js';

const accounts = props => {
    const list1 = [
        {
            name: 'Amy Farha',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            subtitle: 'Vice President'
        },
        {
            name: 'Chris Jackson',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
        },
    ]
    const list2 = [
        {
            category: 'League',
            name: 'League Main',
            login: 'Lucvd1',
            password: 'Luc134679852'
        },
        {
            category: 'Mail',
            name: 'Spam Mail',
            login: 'lucvdrs@outlook.com',
            password: 'Luc134679852'
        },
    ]

    if (props.control == 'accounts') {
        return (
            <View style={styles.accountContainer}>
                <View style={styles.accountHeader}>
                    <View style={styles.head}>
                        <View style={styles.leftHead}>
                        </View>
                        <View style={styles.middleHead}>
                            <Text style={globalStyles.textStandard}>Accounts</Text>
                        </View>
                        <View style={styles.rightHead}>
                            <TouchableOpacity>
                                <Icon reverse
                                    name="ios-add"
                                    type='ionicon'
                                    color='#52AA8A' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.accountContent}>
                    <View>
                        {
                            list1.map((l, i) => (
                                <ListItem
                                    key={i}
                                    leftAvatar={{ source: { uri: l.avatar_url } }}
                                    title={l.name}
                                    subtitle={l.subtitle}
                                    bottomDivider
                                />
                            ))
                        }
                    </View>
                    <View>
                        {
                            list2.map((item, i) => (
                                <TouchableOpacity>
                                    <ListItem
                                        key={i}
                                        title={item.name}
                                        bottomDivider
                                        chevron
                                    />
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                </View>
            </View>
        );
    } else {
        return null;
    }
}
export default accounts;