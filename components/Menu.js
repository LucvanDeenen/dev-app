import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';


const Menu = props => {
    return (
        <View style={styles.menuTab}>
            <View style={styles.menuRow}>
                <TouchableOpacity style={styles.menuButton}>
                    <Icon reverse
                        name="ios-home" 
                        type='ionicon'
                        color='#f50'/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuButton}>
                    <Icon reverse
                        name='ios-calculator'
                        type='ionicon'
                        color='#f50'/>
                </TouchableOpacity>
            </View>
            <View style={styles.menuRow}>
                <TouchableOpacity style={styles.menuButton}>
                    <Icon reverse
                        name='ios-create'
                        type='ionicon'
                        color='#f50'/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuButton}>
                    <Icon reverse
                        name='ios-camera'
                        type='ionicon'
                        color='#f50' />
                </TouchableOpacity>
            </View>
            <View style={styles.menuRow}>
                <TouchableOpacity style={styles.menuButton}>
                    <Icon reverse
                        name='youtube'
                        type='feather'
                        color='#f50'/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuButton}>
                    <Icon name='arrow-right'
                        type='evilicon'
                        color='#ffffff'
                        size='60'/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    menuRow: {
        flexDirection: 'row',
        flex: 1,
    },
    menuTab: {
        justifyContent: 'center',
        flex: 1,
    },
    menuButton: {
        borderRadius: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        padding: 5,
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        backgroundColor: '#f77f40'
    },
    menuButtonText: {
        color: '#fff',
        textAlign: 'center'
    }
});

export default Menu;