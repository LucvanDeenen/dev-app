import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './local-styles.js';
import globalStyles from '../Main/styles.js';

export default function ItemInspect({ item, closeItem }) {
    if (item != null) {
        return (
            <View style={{ zIndex: 2, position: 'absolute', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#bbb' }}>
                <View style={{ width: '70%', backgroundColor: '#ddd', height: '60%', borderRadius: 20, justifyContent: 'center' }}>
                    <TouchableOpacity style={styles.noteItemClose} onPress={closeItem}>
                        <Icon reverse
                            size={20}
                            name="ios-close"
                            type='ionicon'
                            color='#52AA8E' />
                    </TouchableOpacity>
                    <Text style={globalStyles.textStandardDark}> Title: {item.head} Content: {item.content} </Text>
                </View>
            </View>
        )
    } else {
        return null
    }
}