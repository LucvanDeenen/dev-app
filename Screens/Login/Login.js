import React from 'react';
import { View, TouchableOpacity, TextInput, Image } from 'react-native';
import { Icon, Text } from 'react-native-elements';

import styles from './local-styles.js';
import globalStyles from '../../components/Main/styles.js';

const Login = props => {
    return (
        <View style={[styles.container, { backgroundColor: props.colors.backgroundColor }]}>

            <View style={styles.head}>
                <Image style={{ width: 200, height: 400 }}
                    source={require('../../assets/dark-mode-icon-cutout.png')} />
            </View>

            <View style={styles.containerInput}>
                <View style={styles.context}>
                    <View style={{ flex: 4 }}>
                        <Text style={[globalStyles.textStandardSide, { color: props.colors.headTextColor }]}> Username </Text>

                        <TextInput style={[styles.input, { color: props.colors.itemColor, borderColor: props.colors.headTextColor }]}
                            placeholder='Username'
                            placeholderTextColor={props.colors.headTextColor}
                            keyboardAppearance='dark' />

                        <Text style={[globalStyles.textStandardSide, { color: props.colors.headTextColor }]}> Password </Text>

                        <TextInput style={[styles.input, { color: props.colors.headTextColor, borderColor: props.colors.headTextColor }]}
                            secureTextEntry={true}
                            password={true}
                            placeholder='Password'
                            placeholderTextColor={props.colors.headTextColor}
                            keyboardAppearance='dark' />
                    </View>

                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            onPress={props.log}>
                            <Icon reverse
                                size={30}
                                name="ios-log-in"
                                type='ionicon'
                                color={props.colors.buttonColor}
                                raised />
                        </TouchableOpacity>
                    </View>
                </View>


                <Text style={[globalStyles.textStandard, { color: props.colors.headTextColor }]}> or Login with: </Text>

                <View style={styles.containerSubmit}>
                    <TouchableOpacity
                        onPress={props.log}>
                        <Icon reverse
                            size={30}
                            name="logo-facebook"
                            type='ionicon'
                            color={props.colors.buttonColor}
                            raised />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}
export default Login;