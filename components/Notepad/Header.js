import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.head}>
                <View style={styles.leftHead}>
                    <TouchableOpacity>
                        <Icon reverse
                            name="ios-home"
                            type='ionicon'
                            color='#c97630' />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.textV}>Notities</Text>
                </View>
                <View style={styles.rightHead}>
                    <TouchableOpacity>
                        <Icon reverse
                            name="ios-add"
                            type='ionicon'
                            color='#c97630' />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textV: {
        color: '#fff',
    },
    head: {
        backgroundColor: '#d97f32',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        height: '11%'
    },
    leftHead: {
        alignItems: 'flex-start',
        marginLeft: 2,
        flex: 1,
    },
    rightHead: {
        alignItems: 'flex-end',
        marginRight: 2,
        flex: 1,
    },
})