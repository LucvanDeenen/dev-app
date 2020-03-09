import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import MapView, { Marker, Polyline } from 'react-native-maps';

import Header from '../../components/Maps/Header.js';

import styles from './local-styles.js';
import globalStyles from '../../components/Main/styles.js';

export default function Maps(props) {
    // Use states
    // Starts
    const [reg, setReg] = useState({
        latitude: 50.939180,
        longitude: 5.944199,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
    })

    // Helpers
    const [coordinates, setCoordinates] = useState([]);
    const [createLine, setCreateLine] = useState(false);
    const [createMarker, setCreateMarker] = useState(false);

    // Objects
    const [markers, setMarkers] = useState([]);
    const [line, setLine] = useState([]);

    // Colors
    const [drawColor, setDrawColor] = useState(props.colors.buttonColor);
    const [placeColor, setPlaceColor] = useState(props.colors.buttonColor);

    // Functions
    const toggleCreateLine = () => {
        setCreateLine(!createLine);
        setCoordinates([]);
    }

    const toggleCreateMarker = () => {
        setCreateMarker(!createMarker);
    }

    const eventHandler = (e) => {

        let tempRegion = {
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
        }

        if (createMarker) {
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

        if (createLine) {
            if (coordinates == null) {
                setCoordinates([tempRegion]);
            } if (coordinates != null) {
                setCoordinates(prevCoordinates => [...prevCoordinates, tempRegion]);
            }
        }
    }

    useEffect(() => {
        if (coordinates.length == 2) {
            let newLine = {
                key: (line.length + 1).toString(),
                coordinate: coordinates
            }
            setLine(prevLine => [...prevLine, newLine]);
            let prevCoordinate = coordinates[1];
            setCoordinates([prevCoordinate]);
        }

        if (!createLine) {
            setDrawColor(props.colors.buttonColor);
        } if (createLine) {
            setDrawColor('#11270B');
        }

        if (!createMarker) {
            setPlaceColor(props.colors.buttonColor)
        } if (createMarker) {
            setPlaceColor('#11270B')
        }
    });

    // View
    if (props.control == 'maps') {
        return (
            <View style={styles.container}>
                <Header toggleLine={toggleCreateLine} toggleMarker={toggleCreateMarker} drawColor={drawColor} placeColor={placeColor} colors={props.colors}/>
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
                        onPress={eventHandler.bind(this)}>
                        {
                            markers.map(item => {
                                return <Marker key={item.key}
                                    title={item.title}
                                    description={item.description}
                                    pinColor='#388659'
                                    coordinate={item.coordinates}
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
