import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text, Icon } from 'react-native-elements';

import styles from '../../Screens/Notes/local-styles.js';
import globalStyles from '../Main/styles.js';

export default function NoteItems({ item, removeItem, openItem }) {
    return (
        <TouchableOpacity style={styles.noteItem} onPress={() => openItem(item.key)}>
            <View style={styles.noteItemText}>
                <Text style={globalStyles.textStandardSideHead}> {item.head} </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.noteItemClose}>
                    <Icon reverse
                        size={20}
                        name="ios-checkmark"
                        type='ionicon'
                        color='#388659' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.noteItemClose} onPress={() => removeItem(item.key)}>
                    <Icon reverse
                        size={20}
                        name="ios-close"
                        type='ionicon'
                        color='#388659' />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}