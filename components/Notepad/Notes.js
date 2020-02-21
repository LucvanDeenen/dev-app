import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import CustomHeader from './Header.js';
import CustomContent from './Content';

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

const styles = StyleSheet.create({
    mainScreen: {
        justifyContent: 'flex-start',
        flex: 1,
    },
})