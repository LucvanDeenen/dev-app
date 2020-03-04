import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'react-native-elements';

import styles from './local-styles.js';
import globalStyles from '../Main/styles.js';

export default function ItemInspect({ item, closeItem }) {
    if (item != null) {
        return (
            <View style={styles.inspectBackground}>
                <View style={styles.inspectContainer}>
                    <View style={styles.inspectHeader}>
                        <TouchableOpacity style={styles.noteItemClose} onPress={closeItem}>
                            <Icon reverse
                                size={20}
                                name="ios-close"
                                type='ionicon'
                                color='#52AA8E' />
                        </TouchableOpacity>
                        <Text h4 style={globalStyles.textStandard}> {item.head} </Text>
                    </View>
                    <View style={styles.inspectContent}>
                        <Text style={globalStyles.textStandardDarkSide}> {item.content} </Text>
                    </View>
                </View>
            </View>
        )
    } else {
        return null
    }
}