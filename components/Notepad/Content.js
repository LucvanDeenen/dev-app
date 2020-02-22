import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';

import styles from '../Styles.js';

const Content = props => {
    return (
        <View style={styles.contentText}>
            <Card>
                <Text style={{ marginBottom: 10 }}>
                    The idea with React Native Elements is more about component structure than actual design.
                </Text>
            </Card>
        </View>
    );
}
export default Content;