import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import { Icon, Text } from 'react-native-elements';

import styles from './local-styles.js';
import globalStyles from '../Main/styles.js';

const Login = props => {
    return (
        <View style={styles.container}>
            <Text h2 style={globalStyles.textStandardDark}> Light </Text>
            <Text h2 style={globalStyles.textStandardDark}> Watch </Text>
            <View style={styles.containerLogin}>
                <Text style={globalStyles.textStandardDark}>Username: </Text>
                <TextInput style={{ height: 30, width: '65%', borderColor: 'gray', borderWidth: 1, padding: 1, }}
                />
            </View>
            <View style={styles.containerLogin}>
                <Text style={globalStyles.textStandardDark}>Password: </Text>
                <TextInput style={{ height: 30, width: '65%', borderColor: 'gray', borderWidth: 1, padding: 1, }}
                    secureTextEntry={true}
                    password={true} />
            </View>
            <TouchableOpacity
                onPress={props.log}>
                <Icon reverse
                    name="ios-exit"
                    type='ionicon'
                    color='#52AA5E'
                    raised />
            </TouchableOpacity>
        </View>
    );
}
export default Login;