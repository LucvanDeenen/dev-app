import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'

import styles from './local-styles.js';
import globalStyles from '../Main/styles.js';

export default function AddItem({ addItem }) {
    const [text, setText] = useState('');

    const textInputRef = React.createRef();

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.input}
                ref={textInputRef}
                clearButtonMode="always"
                placeholder='New note...'
                onChangeText={changeHandler} />
            <TouchableOpacity style={styles.submit}
                onPress={() => {
                    textInputRef.current.clear();
                    if (text != null) {
                        addItem(text);
                    }
                }}>
                <Icon size={30}
                    color="#fff"
                    name="ios-add"
                    type='ionicon' />
            </TouchableOpacity>
        </View>
    )
}