import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'

import styles from '../../Screens/Notes/local-styles';
import globalStyles from '../../components/Main/styles.js';

export default function AddItem({ addItem }) {
    const [text, setText] = useState();

    const textInputRef = React.createRef();

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View style={styles.inputContainer}>
            {/* <TextInput style={styles.input}
                ref={textInputRef}
                clearButtonMode="always"
                placeholder='New note...'
                onChangeText={changeHandler} /> */}
            <TouchableOpacity style={styles.submit}
                // onPress={() => {
                //     if (text != null) {
                //         addItem(text);
                //         setText(null);
                //     }
                // }}
                onPress={console.log('dog')}>
                <Icon size={30}
                    color="#fff"
                    name="ios-add"
                    type='ionicon' />
            </TouchableOpacity>
        </View>
    )
}