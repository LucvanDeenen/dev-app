import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Alert, AlertIOS } from 'react-native';
import { Icon } from 'react-native-elements';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.head}>
                <Icon reverse
                            name="ios-home"
                            type='ionicon'
                            color='#f50'
                            size='20' />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    head: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        height: '10%'
    },
})