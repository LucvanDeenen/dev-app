import React, { useState } from 'react';
import { View, Text } from 'react-native';

import MapView, { Marker } from 'react-native-maps';

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

    // const markerHome = React.createRef();

    if (props.control == 'maps') {
        return (
            <View style={styles.container}>
                <Header />
                <View style={styles.content}>
                    <MapView
                        // provider={PROVIDER_GOOGLE}
                        style={styles.map}
                        region={reg}
                        showsUserLocation={true}
                        followUserLocation={true}
                        mapType={"standard"}
                        showsCompass={true}>

                        <Marker title='Home'
                            description='The place I call Home'
                            pinColor='#388659'
                            coordinate={{
                                latitude: (reg.latitude) || -36.82339,
                                longitude: (reg.longitude - 0.00040) || -73.03569,
                            }}
                            // ref={markerHome}
                            // onDragEnd={}
                            draggable={true} />

                        {/* <MapView.Marker
                            coordinate={{
                                latitude: (reg.latitude) || -36.82339,
                                longitude: (reg.longitude) || -73.03569,
                            }}>
                            <View>
                                <Text style={{ color: '#000' }}>
                                    {reg.longitude} / {reg.latitude}
                                </Text>
                            </View>
                        </MapView.Marker> */}

                    </MapView>
                </View>
            </View>
        )
    } else {
        return null;
    }
}
