import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from '../Styles.js';

export default class Content extends Component { 
    render() {
        return(
            <View style={styles.contentText}>
                <Text>
                    Wow
                </Text>
            </View>
        ); 
    }
}
