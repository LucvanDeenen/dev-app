import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon, Text } from 'react-native-elements';

import SwitchToggle from "react-native-switch-toggle";

import styles from './local-styles.js';
import globalStyles from '../../components/Main/styles.js';

const Color = props => {
    const [toggle, setToggle] = useState(false);
    const [color, setColor] = useState({ backgroundColor: `rgba(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 100)})` });

    const changeColor = () => {
        setColor({ backgroundColor: `rgba(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 100)})` })
    }

    if (props.control == 'colors') {
        return (
            <View style={[styles.backgroundContainer, color]} >
                <TouchableOpacity style={[styles.button, { backgroundColor: props.colors.buttonColor }]}
                    onPress={changeColor}>
                    <Icon reverse
                        name='ios-brush'
                        type='ionicon'
                        color={props.colors.itemColor}
                        raised />
                </TouchableOpacity>
                <Text style={[globalStyles.textStandard, { color: props.colors.headTextColor }]}> Color: </Text>
                <Text style={[globalStyles.textStandard, { margin: 10, color: props.colors.headTextColor }]}>  {color.backgroundColor} </Text>
                {/* <SwitchToggle
                    containerStyle={{
                        marginTop: 16,
                        width: 108,
                        height: 48,
                        borderRadius: 25,
                        backgroundColor: "#ccc",
                        padding: 5
                    }}
                    circleStyle={{
                        width: 38,
                        height: 38,
                        borderRadius: 19,
                        backgroundColor: "white"
                    }}
                    switchOn={toggle}
                    onPress={() => {
                        setToggle(!toggle);
                    }}
                    circleColorOff='#fff'
                    circleColorOn='#52AA8A'
                    duration={200}
                /> */}
            </View >
        );
    } else {
        return null;
    }
}
export default Color;