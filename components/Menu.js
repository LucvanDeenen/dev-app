import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';


const Menu = props => {
    return (
        <View style={styles.menuTab}>
            <TouchableOpacity style={styles.opacityButton}>
                <Icon name='rowing' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.opacityButton}>
                <Icon
                    reverse
                    name='ios-american-football'
                    type='ionicon'
                    color='#517fa4'
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.opacityButton}>
                <Icon
                    name='g-translate'
                    color='#00aced' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.opacityButton}>
                <Icon
                    name='heartbeat'
                    type='font-awesome'
                    color='#f50'/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.opacityButton}>
                <Icon
                    name='youtube'
                    type='feather'
                    color='#f50'
                    size='50'
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    opacityButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },
    menuTab: {
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: 'center',
        flex: 1,
    }
});

export default Menu;