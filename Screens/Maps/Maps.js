import React, { useState } from 'react';
import { View, Text } from 'react-native';

import MapView, { Marker, Polyline } from 'react-native-maps';

import Header from '../../components/Maps/Header.js';

import styles from './local-styles.js';
import globalStyles from '../../components/Main/styles.js';

export default function Maps(props) {
    // Use states
    const [reg, setReg] = useState({
        latitude: 50.939180,
        longitude: 5.944199,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
    })

    const [createLine, setCreateLine] = useState(false);
    const [markers, setMarkers] = useState([]);
    const [line, setLine] = useState([]);
    const [coordinates, setCoordinates] = useState([]);


    // Functions
    const toggleCreateLine = () => {
        setCreateLine(!createLine);
    }

    const placeMarker = (e) => {
        let tempRegion = {
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
        }

        setMarkers([...markers, {
            key: (markers.length + 1).toString(),
            title: 'Marker',
            description: ((tempRegion.longitude).toFixed(6).toString() + ', ' + (tempRegion.latitude).toFixed(6).toString()),
            coordinates: {
                latitude: tempRegion.latitude,
                longitude: tempRegion.longitude,
            },
        }]);
    }

    async function drawLine(e) {
        if (createLine) {
            if (coordinates == null) {
                setCoordinates([
                    {
                        latitude: e.nativeEvent.coordinate.latitude,
                        longitude: e.nativeEvent.coordinate.longitude,
                    }
                ]);
            }
            if (coordinates != null) {
                setCoordinates([...coordinates,
                {
                    latitude: e.nativeEvent.coordinate.latitude,
                    longitude: e.nativeEvent.coordinate.longitude,
                }]);
            }

            if (coordinates.length == 2) {
                setLine([...line,
                {
                    key: (line.length + 1).toString(),
                    coordinate: coordinates
                }
                ]);
                setCoordinates([]);
            }
        } else {
            return null;
        }
    }

    // View
    if (props.control == 'maps') {
        return (
            <View style={styles.container}>
                <Header toggle={toggleCreateLine} coordinates={coordinates} />
                <View style={styles.content}>
                    <MapView
                        // provider={PROVIDER_GOOGLE}
                        style={styles.map}
                        initialRegion={reg}

                        zoomTapEnabled={false}
                        showsCompass={true}
                        showsUserLocation={true}
                        followUserLocation={true}

                        mapType={"standard"}

                        onRegionChangeComplete={(e) => { setReg(e) }}
                        onPress={placeMarker.bind(this)}>
                        {
                            markers.map(item => {
                                return <Marker key={item.key}
                                    title={item.title}
                                    description={item.description}
                                    pinColor='#388659'
                                    coordinate={item.coordinates}
                                    onPress={drawLine.bind(this)}
                                    draggable={true} />
                            })
                        }
                        {
                            line.map(item => {
                                return <Polyline key={item.key}
                                    coordinates={item.coordinate}
                                    strokeColor="#000"
                                    strokeColors={['#7F0000']}
                                    strokeWidth={6} />
                            })
                        }
                    </MapView>
                </View>
            </View>
        )
    } else {
        return null;
    }
}
