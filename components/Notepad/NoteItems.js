import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text, Icon } from 'react-native-elements';

import styles from './local-styles.js';
import globalStyles from '../Main/styles.js';

export default function NoteItems({ item, removeItem }) {
    return (
        <TouchableOpacity style={styles.noteItem}>
            <View style={styles.noteItemText}>
                <Text style={globalStyles.textStandardSideHead}> {item.head} </Text>
                <Text style={globalStyles.textStandardSide}>  {item.content} </Text>
            </View>
            <TouchableOpacity style={styles.noteItemClose} onPress={() => removeItem(item.key)}>
                <Icon reverse
                    size={20}
                    name="ios-close"
                    type='ionicon'
                    color='rgba(76,53,164,34)' />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}