import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import Firebase from '../../database/firebase.js';

// Styling
import styles from './local-styles.js';
import globalStyles from '../../components/Main/styles.js';

export default function Accounts(props) {
    const [accounts, setAccounts] = useState([]);

    const getAccounts = async () => {
        const snapshot = await Firebase.getAccounts();
        snapshot.forEach(item => {
            console.log(item.data());
            console.log(accounts);
            setAccounts([...accounts, item.data()]);
        })

    }

    const pushAccounts = () => {
        let json = {
            Name: 'NewName',
            Password: '123',
            id: 1,
        }
        console.log(json);
        Firebase.addAccount(json);
    }

    const [items, setItems] = useState([])

    if (props.control == 'accounts') {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={{ backgroundColor: 'red', flex: 1 }}
                    onPress={() => { getAccounts() }}>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: 'blue', flex: 1 }}
                    onPress={() => { pushAccounts() }}>
                </TouchableOpacity>

                <View style={{ flex: 1 }}>
                    {
                        accounts.map(account => {
                            return <View style={{ flex: 1 }}>
                                <Text>
                                    {account.Name}
                                </Text>
                            </View>
                        })
                    }
                </View>
            </View>
        );
    } else {
        return null;
    }
}
