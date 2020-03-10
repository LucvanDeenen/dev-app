import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import Firebase from '../../database/firebase.js';
import AddAccount from '../../components/Accounts/AddAccount.js';

// Styling
import styles from './local-styles.js';
import globalStyles from '../../components/Main/styles.js';

export default Accounts = (props) => {
    const [accounts, setAccounts] = useState([]);
    const [toggleCreate, setToggleCreate] = useState(false);

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

    const toggleCreateAccount = () => {
        setToggleCreate(!toggleCreate);
    }

    const newAccount = (json) => {
        getAccounts();
        Firebase.addAccount(json);
    }

    useEffect(() => {

    }, [])

    if (props.control == 'accounts') {
        return (
            <View style={{ flex: 1 }}>

                <View style={[styles.header, { backgroundColor: props.colors.itemColor }]}>

                    <View style={{ flex: 1, padding: 10 }}>
                        <TouchableOpacity style={{ backgroundColor: 'red', flex: 1, alignItems: 'center', justifyContent: 'center' }}
                            onPress={() => { getAccounts() }}>
                            <Text>Pull</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, padding: 5 }}>
                        {/* <TouchableOpacity style={{ backgroundColor: 'blue', flex: 1, alignItems: 'center', justifyContent: 'center' }}
                            onPress={() => { pushAccounts() }}>
                            <Text>Push</Text>
                        </TouchableOpacity> */}
                    </View>

                    <View style={{ flex: 1, alignItems: 'flex-end', padding: 5 }}>
                        <TouchableOpacity onPress={() => {
                            getAccounts()
                            toggleCreateAccount()
                        }}>
                            <Icon reverse
                                size={25}
                                name="ios-add"
                                type='ionicon'
                                color={props.colors.buttonColor}
                                raised />
                        </TouchableOpacity>
                    </View>
                </View>

                <AddAccount toggleCreate={toggleCreate} toggleCreateAccount={toggleCreateAccount} colors={props.colors} newAccount={(acc) => { newAccount(acc) }} id={accounts.length} />

                <View style={{ flex: 7 }}>
                    {
                        accounts.map(account => {
                            return <View style={[styles.accountDetails, { backgroundColor: props.colors.itemColor }]}
                                key={account.id}>
                                <Text> {account.Name} </Text>
                                <Text> {account.Password} </Text>
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
