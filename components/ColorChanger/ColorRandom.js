import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './local-styles.js';
import globalStyles from '../Main/styles.js';

const Color = props => {
    const [color, setColor] = useState({ backgroundColor:`rgba(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 100)})` });

    const changeColor = () => {
        setColor({ backgroundColor: `rgba(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 100)})` })
    }

    timer = () => {
        return setTimeout(function () {
            console.log('wot')
        }, 2000);
    }
    

    if (props.control == 'colors') {
        return (
            <View style={[styles.backgroundContainer, color]}>
                <TouchableOpacity style={styles.button}>
                    <Icon reverse
                        onPress={changeColor}
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