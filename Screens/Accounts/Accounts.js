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
            if (accounts == null) {
                setAccounts([item.data()])
            } else {
                setAccounts(prevAccounts => [...prevAccounts, item.data()]);
            }
        })

    }

    const pushAccounts = () => {
        let json = {
            Name: 'NewName',
            Password: '123',
            id: 2,
        }
        console.log(json);
        Firebase.addAccount(json);
    }

    if (props.control == 'accounts') {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={{ backgroundColor: 'red', flex: 1, alignItems: 'center', justifyContent: 'center' }}
                    onPress={() => { getAccounts() }}>
                    <Text>Pull</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: 'blue', flex: 1, alignItems: 'center', justifyContent: 'center' }}
                    onPress={() => { pushAccounts() }}>
                    <Text>Push</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: 'white', flex: 1, alignItems: 'center', justifyContent: 'center' }}
                    onPress={() => { console.log(accounts) }}>
                    <Text>List</Text>
                </TouchableOpacity>
            </View>
        );
    } else {
        return null;
    }
}
