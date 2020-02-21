import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
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
                            color='#eb9144'
                            size='20' />
                    </TouchableOpacity>
                </View>
                <View style={styles.rightHead}>
                    <TouchableOpacity>
                        <Icon name="ios-add"
                            type='ionicon'
                            color='#fff'
                            size='40' />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    head: {
        backgroundColor: '#d97f32',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        height: '10%'
    },
    leftHead: {
        alignItems: 'flex-start',
        padding: 5,
        flex: 1,
    },
    rightHead: {
        alignItems: 'flex-end',
        marginRight: 15,
        flex: 1,
    },
})