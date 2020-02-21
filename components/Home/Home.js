import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

const Home = props => {
    return (
        <View style={styles.homeRow}>
            <Header
                placement="left"
                leftComponent={{ icon: 'Menu', color: '#fff' }}
                centerComponent={{ text: 'Home', style: { color: '#fff' } }}
            />
            <Text>Wow</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    homeRow: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Home;