import React, { useState } from 'react';
import { View, ProgressViewIOSComponent } from 'react-native';
import { Icon } from 'react-native-elements';

import ActionButton from 'react-native-circular-action-menu';

import styles from './styles.js';

const Notes = props => {
    const [collapse, setCollapse] = useState(false);


    if (!props.control) {
        return (
            <View style={styles.containerFooter}>
                <ActionButton buttonColor="#52AA5E">
                    <ActionButton.Item title="New Task" onPress={props.switch}>
                        <Icon reverse
                            name="ios-home"
                            type='ionicon'
                            color='#52AA5E'
                            raised />
                    </ActionButton.Item>
                    <ActionButton.Item title="Notifications" onPress={() => { }}>
                        <Icon reverse
                            name="gear"
                            type='font-awesome'
                            color='#52AA5E'
                            raised />
                    </ActionButton.Item>
                    <ActionButton.Item title="All Tasks" onPress={props.logout}>
                        <Icon reverse
                            name="ios-exit"
                            type='ionicon'
                            color='#52AA5E'
                            raised />
                    </ActionButton.Item>
                </ActionButton>
            </View>
        );
    } else {
        return (
            <View style={styles.containerFooter}>
                <ActionButton buttonColor="#52AA5E"
                    onPress={props.switch} />
            </View>
        );
    }
}
export default Notes;


