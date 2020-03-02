import React, { useState } from 'react';
import { View, TouchableOpacity, Alert, Text, Modal } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './local-styles.js';
import globalStyles from '../Main/styles.js';

const Menu = props => {
    if (props.control) {
        return (
            <View style={styles.background}>
                <View style={styles.container}>
                    <View style={styles.menuTab}>
                        <View style={styles.menuRow}>
                            <View style={styles.menuBlock}>
                                <TouchableOpacity style={styles.menuButton}
                                    onPress={() => { props.select('home') }}>
                                    <Icon reverse
                                        name="ios-home"
                                        type='ionicon'
                                        color='#52AA5E'
                                        raised />
                                </TouchableOpacity>
                                <Text style={globalStyles.textStandard}> Home </Text>
                            </View>
                            <View style={styles.menuBlock}>
                                <TouchableOpacity style={styles.menuButton}
                                    onPress={() => { props.select('accounts') }}>
                                    <Icon reverse
                                        name='ios-key'
                                        type='ionicon'
                                        color='#52AA5E'
                                        raised />
                                </TouchableOpacity>
                                <Text style={globalStyles.textStandard}> Accounts </Text>
                            </View>
                        </View>
                        <View style={styles.menuRow}>
                            <View style={styles.menuBlock}>
                                <TouchableOpacity value='notes' style={styles.menuButton}
                                        onPress={() => { props.select('notes') }}>
                                    <Icon reverse
                                        name='ios-create'
                                        type='ionicon'
                                        color='#52AA5E'
                                        raised />
                                </TouchableOpacity>
                                <Text style={globalStyles.textStandard}> Notes </Text>
                            </View>
                            <View style={styles.menuBlock}>
                                <TouchableOpacity style={styles.menuButton}
                                        onPress={() => { props.select('videos') }}>
                                    <Icon reverse
                                        name='youtube'
                                        type='feather'
                                        color='#52AA5E'
                                        raised />
                                </TouchableOpacity>
                                <Text style={globalStyles.textStandard}> Videos </Text>
                            </View>
                        </View>
                        <View style={styles.menuRow}>
                            <View style={styles.menuBlock}>
                                <TouchableOpacity style={styles.menuButton}
                                        onPress={() => { props.select('colors') }}>
                                    <Icon reverse
                                        name='ios-color-palette'
                                        type='ionicon'
                                        color='#52AA5E'
                                        raised />
                                </TouchableOpacity>
                                <Text style={globalStyles.textStandard}> Colors </Text>
                            </View>
                            <View style={styles.menuBlock}>
                                <TouchableOpacity style={styles.menuButton}>
                                    <Icon reverse
                                        name='ios-camera'
                                        type='ionicon'
                                        color='#52AA5E'
                                        raised />
                                </TouchableOpacity>
                                <Text style={globalStyles.textStandard}> Camera </Text>
                            </View>
                        </View>
                    </View>
                    <Text style={globalStyles.textStandard}> 1/1 </Text>
                </View>
            </View>
        );
    }
    else {
        return (null);
    }

}

export default Menu

