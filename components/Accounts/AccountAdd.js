import React from 'react';
import { View } from 'react-native';

import styles from './local-styles.js';
import globalStyles from '../Main/styles.js';

const AccountAdd = props => {
    if (props.control) {
        return (
            <View style={styles.background}>
                <View style={styles.container}>
                    
                </View>
            </View>
        );
    }
    else {
        return (null);
    }

}

export default AccountAdd

