import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Alert, Text } from 'react-native';
import { Icon } from 'react-native-elements';


export default class Menu extends Component {
    buttonTest() {
        Alert.alert(
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
            <View style={styles.container}>
                <View style={styles.menuTab}>
                    <View style={styles.menuRow}>
                        <View style={styles.menuBlock}>
                            <TouchableOpacity value='home' style={styles.menuButton} >
                                <Icon reverse
                                    name="ios-home"
                                    type='ionicon'
                                    color='#52AA5E'
                                    raised />
                            </TouchableOpacity>
                            <Text style={styles.menuButtonText}> Home </Text>
                        </View>
                        <View style={styles.menuBlock}>
                            <TouchableOpacity style={styles.menuButton}>
                                <Icon reverse
                                    name='ios-calculator'
                                    type='ionicon'
                                    color='#52AA5E'
                                    raised />
                            </TouchableOpacity>
                            <Text style={styles.menuButtonText}> Calculator </Text>
                        </View>
                    </View>
                    <View style={styles.menuRow}>
                        <View style={styles.menuBlock}>
                            <TouchableOpacity style={styles.menuButton}>
                                <Icon reverse
                                    name='ios-create'
                                    type='ionicon'
                                    color='#52AA5E'
                                    raised />
                            </TouchableOpacity>
                            <Text style={styles.menuButtonText}> Notes </Text>
                        </View>
                        <View style={styles.menuBlock}>
                            <TouchableOpacity style={styles.menuButton} onPress={this.buttonTest}>
                                <Icon reverse
                                    name='ios-camera'
                                    type='ionicon'
                                    color='#52AA5E'
                                    raised />
                            </TouchableOpacity>
                            <Text style={styles.menuButtonText}> Camera </Text>
                        </View>
                    </View>
                    <View style={styles.menuRow}>
                        <View style={styles.menuBlock}>
                            <TouchableOpacity style={styles.menuButton}>
                                <Icon reverse
                                    name='youtube'
                                    type='feather'
                                    color='#52AA5E'
                                    raised />
                            </TouchableOpacity>
                            <Text style={styles.menuButtonText}> Videos </Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.menuButtonText}> 1/1 </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 100,
        height: '75%',
        padding: 5,
        marginTop: 30,
        marginHorizontal: 40,
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 3, width: 3 },
        shadowOpacity: 1,
        shadowRadius: 1,
        backgroundColor: '#52AA8A',
    },
    menuTab: {
        justifyContent: 'center',
        flex: 1,
    },
    menuRow: {
        flexDirection: 'row',
        flex: 1,
    },
    menuBlock: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    menuButton: {
        maxHeight: 80,
        maxWidth: 80,
        borderRadius: 50,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        padding: 5,
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        backgroundColor: '#388659'
    },
    menuButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Arial Rounded MT Bold',
    }
});
