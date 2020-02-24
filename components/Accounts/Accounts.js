import React from 'react';
import { View, Text } from 'react-native';

import styles from './local-styles.js';
import globalStyles from '../Main/styles.js';

const accounts = props => {
    if (props.control == 'accounts') {
        return (
            <View style={styles.accountContainer}>
                <View style={styles.accountHeader}>
                    <View style={styles.headerContainer}></View>
                    <Text style={globalStyles.textStandard}>Accounts</Text>
                </View>
                <View style={styles.accountContent}>
                    
                </View>
            </View>
        );
    } else {
        return null;
    }    
}
export default accounts;