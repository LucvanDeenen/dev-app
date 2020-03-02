import React, { useState, Text } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon, Slider } from 'react-native-elements';

import styles from './local-styles.js';
import globalStyles from '../Main/styles.js';

const Color = props => {
    const [color, setColor] = useState({ backgroundColor: `rgba(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 100)})` });

    const changeColor = () => {
        setColor({ backgroundColor: `rgba(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 100)})` })
    }

    if (props.control == 'colors') {
        return (
            <View style={[styles.backgroundContainer, color]} >
                <TouchableOpacity style={styles.button}
                    onPress={changeColor}>
                    <Icon reverse
                        name='ios-brush'
                        type='ionicon'
                        color='#52AA5E'
                        raised />
                </TouchableOpacity>
            </View >
        );
    } else {
        return null;
    }
}
export default Color;