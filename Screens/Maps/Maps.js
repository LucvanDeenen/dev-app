import React, { useState } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';

import Header from '../../components/Maps/Header.js';

import styles from './local-styles.js';
import globalStyles from '../../components/Main/styles.js';

export default function Maps(props) {
    const [reg, setReg] = useState({
        latitude: 50.939180,
        longitude: 5.944199,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
    })

    if (props.control == 'maps') {
        return (
            <View style={styles.container}>
                <Header />
                <View style={styles.content}>
                    <MapView
                        // provider={PROVIDER_GOOGLE}
                        style={styles.map}
                        region={reg} 
                        loadingEnabled={true}
                        mapType={"standard"}
                        showsPointsOfInterest={false}
                        showsBuildings={false}
                        showsTraffic={false}
                        showsIndoors={false}
                        showsCompass={true}
                    ></MapView>
                </View >
            </View>
        )
    } else {
        return null
    }
}