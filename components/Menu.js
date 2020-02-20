import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

// const widthScreen = Dimensions.get("window").width;

const Menu = props => {
    return (
        <View style={styles.menuTab}>
            <TouchableOpacity>
                <Text h1>Wo3w</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create ({
    opacityButton: {
        borderStyle: "solid",
        borderWidth: 1
    },
    menuTab: {
        borderStyle: "solid",
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }
});

export default Menu;