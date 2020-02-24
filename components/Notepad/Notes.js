import React from 'react';
import { View } from 'react-native';

import CustomHeader from './Header.js';
import CustomContent from './Content.js';

import styles from './local-styles.js';
import globalStyles from '../Main/styles.js';

const Notes = props => {
    if (props.control == 'notes') {
        return (
            <View style={styles.mainScreen}>
                <CustomHeader />
                <CustomContent />
            </View>
        );
    } else {
        return null;
    }
}
export default Notes;
