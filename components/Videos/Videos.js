import React from 'react';
import { View, Text } from 'react-native';
import { Video } from 'react-native-video';

import styles from './local-styles.js';
import globalStyles from '../Main/styles.js';

const Videos = props => {
    if (props.control == 'videos') {
        return (
            <View style={styles.VideosContainer}>
                <Text>Gehaktbal</Text>
            </View>
        );
    } else {
        return null;
    }
}
export default Videos;