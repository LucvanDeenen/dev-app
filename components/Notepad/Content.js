import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

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

const styles = StyleSheet.create({
    contentText: {
        marginTop: 10,
        marginLeft: 10,
    } 
})