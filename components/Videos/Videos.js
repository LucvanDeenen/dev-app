import React from 'react';
import { View, Text } from 'react-native';

import styles from '../Styles.js';

const Videos = props => {
    if (props.control == 'home') {
        return (
            <View>
                <Text>Hello</Text>
            </View>
        );
    } else {
        return null;
    }    
}
export default Videos;