import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Alert } from 'react-native';
import { Icon } from 'react-native-elements';


export default class Menu extends Component {
    buttonTest() {
        Alert.alert (
            'Testing testing',
            'Will the real slim shady please stand up!',
            [{
                text: 'Ask me later', onPress: () => console.log('Ask me later pressed')
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {
                text: 'OK', onPress: () => console.log('OK Pressed')
            }],
            {
                cancelable: false
            }
        );
    }

    render() {
        return (
            <View style={styles.menuTab}>
                <View style={styles.menuRow}>
                    <TouchableOpacity value='home' style={styles.menuButton} >
                        <Icon reverse
                            name="ios-home"
                            type='ionicon'
                            color='#f50' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuButton}>
                        <Icon reverse
                            name='ios-calculator'
                            type='ionicon'
                            color='#f50' />
                    </TouchableOpacity>
                </View>
                <View style={styles.menuRow}>
                    <TouchableOpacity style={styles.menuButton}>
                        <Icon reverse
                            name='ios-create'
                            type='ionicon'
                            color='#f50' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuButton} onPress={this.buttonTest}>
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
                            color='#f50' />
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.menuButton}>
                    <Icon name='arrow-right'
                        type='evilicon'
                        color='#ffffff'
                        size='60'/>
                </TouchableOpacity> */}
                </View>
            </View>
        );
    }
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
