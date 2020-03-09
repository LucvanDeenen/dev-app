import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import Firebase from '../../database/firebase.js';

import AccountDetail from '../../components/Accounts/AccountDetails';

// Styling
import styles from './local-styles.js';
import globalStyles from '../../components/Main/styles.js';

export default function Accounts(props) {
    const [accounts, setAccounts] = useState([]);

    const getAccounts = async () => {
        setAccounts([]);
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
        Firebase.addAccount(json);
    }

    // useEffect(() => {
    //     getAccounts();
    // })

    if (props.control == 'accounts') {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, borderBottomWidth: 2, flexDirection: 'row' }}>
                    <TouchableOpacity style={{ backgroundColor: 'red', flex: 1, alignItems: 'center', justifyContent: 'center' }}
                        onPress={() => { getAccounts() }}>
                        <Text>Pull</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: 'blue', flex: 1, alignItems: 'center', justifyContent: 'center' }}
                        onPress={() => { pushAccounts() }}>
                        <Text>Push</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 5 }}>
                    {
                        accounts.map(account => {
                            return <View style={styles.accountDetails} key={account.id}>
                                <Text> {account.Name} </Text>
                                <Text> {account.Password} </Text>
                            </View>
                        })
                    }
                    {/* <FlatList
                        data={accounts}
                        renderItem={({ account }) => (
                            <NoteItems item={item} removeItem={removeItem} openItem={openItem} />
                        )} /> */}
                </View>
            </View>
        );
    } else {
        return null;
    }
}
