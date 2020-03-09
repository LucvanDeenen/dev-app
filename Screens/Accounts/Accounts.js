import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';

import Firebase from '../../database/firebase.js';

// Styling
import styles from './local-styles.js';
import globalStyles from '../../components/Main/styles.js';

export default function Accounts(props) {
    const [name, setName] = useState();

    const getAccounts = async () => {
        const snapshot = await Firebase.getAccounts();
        snapshot.forEach(item => {
            console.log(item.data());
        })
        
    }

    const getAccountAsync = () => {
        Firebase.getAccountAsync();
    }

    const [items, setItems] = useState([])

    if (props.control == 'accounts') {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={
                    {
                        backgroundColor: 'red', flex: 1,
                    }
                }
                    onPress={() => { getAccounts() }}>
                </TouchableOpacity>
                {/* {
                    items.map(items => {
                        return (
                            <View>
                            </View>
                        )
                    })
                } */}
            </View>
        );
    } else {
        return null;
    }
}
