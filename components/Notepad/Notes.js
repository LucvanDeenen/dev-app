import React, { Component } from 'react';
import { View } from 'react-native';

import CustomHeader from './Header.js';
import CustomContent from './Content.js';

import styles from '../Styles.js';

export default class Notes extends Component {
    render() {
        return (
            <View style={styles.mainScreen}>
                <CustomHeader />
                <CustomContent />
            </View>
        )
    }
}
