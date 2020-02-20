import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Header } from 'react-native-elements';

// const widthScreen = Dimensions.get("window").width;

const Menu = props => {
    return (
        <View style={styles.menuTab}>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
            <TouchableOpacity style={styles.opacityButton}>
                <Text>Wo3w</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    opacityButton: {
        borderStyle: "solid",
        borderWidth: 1,
        padding: 5
    },
    menuTab: {
        borderStyle: "solid",
        borderWidth: 1,
        flex: 1,
    }
});

export default Menu;