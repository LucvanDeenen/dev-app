import React, { Component } from 'react';
import { View, TouchableOpacity, Alert, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from '../Styles.js'

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
                            <Text style={styles.textStandard}> Home </Text>
                        </View>
                        <View style={styles.menuBlock}>
                            <TouchableOpacity style={styles.menuButton}>
                                <Icon reverse
                                    name='ios-calculator'
                                    type='ionicon'
                                    color='#52AA5E'
                                    raised />
                            </TouchableOpacity>
                            <Text style={styles.textStandard}> Calculator </Text>
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
                            <Text style={styles.textStandard}> Notes </Text>
                        </View>
                        <View style={styles.menuBlock}>
                            <TouchableOpacity style={styles.menuButton} onPress={this.buttonTest}>
                                <Icon reverse
                                    name='ios-camera'
                                    type='ionicon'
                                    color='#52AA5E'
                                    raised />
                            </TouchableOpacity>
                            <Text style={styles.textStandard}> Camera </Text>
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
                            <Text style={styles.textStandard}> Videos </Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.textStandard}> 1/1 </Text>
            </View>
        );
    }
}

