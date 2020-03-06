import React, { useState, Component } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';

import Header from '../../components/Maps/Header.js';

import styles from './local-styles.js';
import globalStyles from '../../components/Main/styles.js';

export default class Maps extends Component {
    region = {
        latitude: 50.939180,
        longitude: 5.944199,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
    }

    // state = {
    //     mapRegion: null,
    //     lastLat: null,
    //     lastLong: null,
    // }

    // componentDidMount() {
    //     this.watchID = navigator.geolocation.watchPosition((position) => {
    //         // Create the object to update this.state.mapRegion through the onRegionChange function
    //         let region = {
    //             latitude: position.coords.latitude,
    //             longitude: position.coords.longitude,
    //             latitudeDelta: 0.00922 * 1.5,
    //             longitudeDelta: 0.00421 * 1.5
    //         }
    //         this.onRegionChange(region, region.latitude, region.longitude);
    //     });
    // }

    // componentWillUnmount() {
    //     navigator.geolocation.clearWatch(this.watchID);
    // }

    // onRegionChange(region, lastLat, lastLong) {
    //     this.setState({
    //         mapRegion: region,
    //         // If there are no new values set use the the current ones
    //         lastLat: lastLat || this.state.lastLat,
    //         lastLong: lastLong || this.state.lastLong
    //     });
    // }

    // onMapPress(e) {
    //     console.log(e.nativeEvent.coordinate.longitude);
    //     let region = {
    //         latitude: e.nativeEvent.coordinate.latitude,
    //         longitude: e.nativeEvent.coordinate.longitude,
    //         latitudeDelta: 0.00922 * 1.5,
    //         longitudeDelta: 0.00421 * 1.5
    //     }
    //     this.onRegionChange(region, region.latitude, region.longitude);
    // }

    render() {
        if (this.props.control == 'maps') {
            return (
                <View style={styles.container}>
                    <Header />
                    <View style={styles.content}>
                        <MapView
                            
                            // provider={PROVIDER_GOOGLE}
                            // onRegionChange={this.onRegionChange.bind(this)}
                            // onPress={this.onMapPress.bind(this)}style={styles.map}
                            
                            region={this.region}
                            showsUserLocation={true}
                            followUserLocation={true}
                            mapType={"standard"}
                            showsCompass={true}>
                            
                            {/* <MapView.Marker
                                coordinate={{
                                    latitude: (this.state.lastLat + 0.00050) || -36.82339,
                                    longitude: (this.state.lastLong + 0.00050) || -73.03569,
                                }}>
                                <View>
                                    <Text style={{ color: '#000' }}>
                                        {this.state.lastLong} / {this.state.lastLat}
                                    </Text>
                                </View>
                            </MapView.Marker> */}
                        
                        </MapView>
                    </View >
                </View>
            )
        } else {
            return null;
        }
    }
}
