import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';

import Firebase from '../../database/firebase.js';

// Styling
import styles from './local-styles.js';
import globalStyles from '../../components/Main/styles.js';

export default function Accounts(props) {
    const [name, setName] = useState();

    const setNames = () => {
        setName(Firebase.getNames())
        console.log(name, 'setter');
    }

    async function getName() {
        let response = await Firebase.getNames()
        // let object = response.forEach(obj => {
        //     console.log(obj);
        // });
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
                    onPress={() => { getName() }}>
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
