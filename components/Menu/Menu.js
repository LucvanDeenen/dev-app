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
                                <TouchableOpacity style={styles.menuButton} >
                                    <Icon reverse
                                        onPress={() => { props.select('home') }}
                                        name="ios-home"
                                        type='ionicon'
                                        color='#52AA5E'
                                        raised />
                                </TouchableOpacity>
                                <Text style={globalStyles.textStandard}> Home </Text>
                            </View>
                            <View style={styles.menuBlock}>
                                <TouchableOpacity style={styles.menuButton}>
                                    <Icon reverse
                                        onPress={() => { props.select('accounts') }}
                                        name='ios-key'
                                        type='ionicon'
                                        color='#52AA5E'
                                        raised />
                                </TouchableOpacity>
                                <Text style={globalStyles.textStandard}> Account </Text>
                            </View>
                        </View>
                        <View style={styles.menuRow}>
                            <View style={styles.menuBlock}>
                                <TouchableOpacity value='notes' style={styles.menuButton}>
                                    <Icon reverse
                                        onPress={() => { props.select('notes') }}
                                        name='ios-create'
                                        type='ionicon'
                                        color='#52AA5E'
                                        raised />
                                </TouchableOpacity>
                                <Text style={globalStyles.textStandard}> Notes </Text>
                            </View>
                            <View style={styles.menuBlock}>
                                <TouchableOpacity style={styles.menuButton}>
                                    <Icon reverse
                                        onPress={() => { props.select('videos') }}
                                        name='youtube'
                                        type='feather'
                                        color='#52AA5E'
                                        raised />
                                </TouchableOpacity>
                                <Text style={globalStyles.textStandard}> Videos </Text>
                            </View>
                        </View>
                        <View style={styles.menuRow}>
                            {/* <View style={styles.menuBlock}>
                                <TouchableOpacity style={styles.menuButton}>
                                    <Icon reverse
                                        name='ios-camera'
                                        type='ionicon'
                                        color='#52AA5E'
                                        raised />
                                </TouchableOpacity>
                                <Text style={globalStyles.textStandard}> Camera </Text>
                            </View> */}
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

