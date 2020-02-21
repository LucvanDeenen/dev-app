import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import CustomHeader from './Header.js';

export default class Notes extends Component {
    render() {
        return (
            <View style={styles.mainScreen}>
                <CustomHeader style={styles.header} />
                <View style={styles.content}>

                </View>
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