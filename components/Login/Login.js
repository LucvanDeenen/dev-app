import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './local-styles.js';
import globalStyles from '../Main/styles.js';

const Login = props => {
    return (
        <View>
            <TouchableOpacity
                onPress={props.logout}>>
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