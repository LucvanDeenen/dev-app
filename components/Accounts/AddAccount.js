import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from '../../Screens/Accounts/local-styles';

export default function AddAccount({ colors, toggleCreate, newAccount, toggleCreateAccount, id }) {
    const [account, setAccount] = useState();
    const [password, setPassword] = useState();

    if (toggleCreate) {
        return (
            <View style={[styles.addMenuContainer, { backgroundColor: colors.itemColor }]}>

                <View style={styles.inputContainer}>

                    <TextInput style={[styles.input, { color: colors.headTextColor, borderColor: colors.headTextColor, backgroundColor: colors.buttonColor }]}
                        placeholder='Account: Login' onChangeText={(login) => { setAccount(login) }} />

                    <TextInput style={[styles.input, { color: colors.headTextColor, borderColor: colors.headTextColor, backgroundColor: colors.buttonColor }]}
                        placeholder='Account: Password' onChangeText={(password) => { setPassword(password) }} />

                </View>

                <View style={styles.submitContainer}>

                    <TouchableOpacity onPress={() => {
                        let obj = {
                            Name: account,
                            Password: password,
                            id: (id+1)
                        }

                        newAccount(obj);
                        toggleCreateAccount();
                    }}>
                        <Icon reverse
                            size={25}
                            name="ios-redo"
                            type='ionicon'
                            color={colors.buttonColor}
                            raised />
                    </TouchableOpacity>

                </View>
            </View>
        )
    } else {
        return null
    }
}