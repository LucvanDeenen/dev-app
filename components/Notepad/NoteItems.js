import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './local-styles.js';
import globalStyles from '../Main/styles.js';

export default function NoteItems({ item }) {
    return (
        <TouchableOpacity style={styles.noteItem}>
            <Text style={globalStyles.textStandardSide}>{item.text}</Text>
        </TouchableOpacity>
    )
}