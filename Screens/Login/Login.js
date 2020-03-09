import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import { Icon, Text, Divider } from 'react-native-elements';

import styles from './local-styles.js';
import globalStyles from '../../components/Main/styles.js';

const Login = props => {
    return (
        <View style={[styles.container, { backgroundColor: props.colors.backgroundColor }]}>

            <View style={styles.head}>
                <Text h2 style={globalStyles.textStandardDark}> Light </Text>
                <Text h2 style={globalStyles.textStandardDark}> Watch </Text>
            </View>

            <Text style={globalStyles.textStandardDark}>Username </Text>
            <TextInput style={styles.input}
                placeholder='Username'
                keyboardAppearance='dark' />
            <Text style={globalStyles.textStandardDark}>Password </Text>
            <TextInput style={styles.input}
                secureTextEntry={true}
                password={true}
                placeholder='Password'
                keyboardAppearance='dark' />

            <TouchableOpacity
                onPress={props.log}>
                <Icon reverse
                    size={30}
                    name="ios-log-in"
                    type='ionicon'
                    color='#52AA8A'
                    raised />
            </TouchableOpacity>
        </View>
    );
}
export default Login;