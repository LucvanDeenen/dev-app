import React from 'react';
import { View, Text } from 'react-native';
import Video from 'react-native-video';

import styles from './local-styles.js';
import globalStyles from '../Main/styles.js';

const Videos = props => {
    if (props.control == 'videos') {
        return (
            <View style={styles.VideosContainer}>
                <Text>Gehaktbal</Text>
                <Video source={{ uri: "https://www.youtube.com/watch?v=914Nhxtqb7s" }}
                    onBuffer={this.onBuffer}
                    onError={this.videoError} />
            </View>
        );
    } else {
        return null;
    }
}
export default Videos;