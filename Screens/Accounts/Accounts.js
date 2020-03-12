import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import Firebase from '../../database/firebase.js';
import AddAccount from '../../components/Accounts/AddAccount.js';

// Styling
import styles from './local-styles.js';
import globalStyles from '../../components/Main/styles.js';
import { FlatList } from 'react-native-gesture-handler';

export default Accounts = (props) => {
    const [accounts, setAccounts] = useState([]);
    const [toggleCreate, setToggleCreate] = useState(false);

    const getAccounts = async () => {
        setAccounts([]);
        const snapshot = await Firebase.getAccounts();
        snapshot.forEach(item => {
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
        getAccounts();
    }, [])

    if (props.control == 'accounts') {
        return (
            <View style={{ flex: 1 }}>

                <View style={[styles.header, { backgroundColor: props.colors.itemColor }]}>
                    <View style={{ flex: 1, padding: 10 }}>

                    </View>

                    <View style={{ flex: 1, padding: 5 }}>

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
                    <FlatList data={accounts}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={( { item } ) =>
                            <TouchableOpacity style={[styles.accountDetails, { backgroundColor: props.colors.itemColor }]}>
                                <Text style={[globalStyles.textStandard, { color: props.colors.headTextColor }]}> Username: {item.Name} </Text>
                                <Text style={[globalStyles.textStandard, { color: props.colors.headTextColor }]}> Password: {item.Password} </Text>
                            </TouchableOpacity>} />
                </View>
            </View>
        );
    } else {
        return null;
    }
}
