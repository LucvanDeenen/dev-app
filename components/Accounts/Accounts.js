import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './local-styles.js';
import globalStyles from '../Main/styles.js';

import AccountCard from './AccountCard.js';

// const [accountCard, setAccountCard] = useState([]);

const addAccount = val => {
    console.log(val);
    // setAccountCard([...accountCard, val]);
}

const accounts = props => {
    if (props.control == 'accounts') {
        return (
            <View style={styles.accountContainer}>
                <View style={styles.accountHeader}>
                    <View style={styles.head}>
                        <View style={styles.leftHead}>
                        </View>
                        <View style={styles.middleHead}>
                            <Text style={globalStyles.textStandard}>Accounts</Text>
                        </View>
                        <View style={styles.rightHead}>
                            <TouchableOpacity>
                                <Icon reverse
                                    name="ios-add"
                                    type='ionicon'
                                    color='#52AA8A'
                                    onPress = {() => {addAccount(<AccountCard/>)}} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.accountContent}>
                    <AccountCard />
                </View>
            </View>
        );
    } else {
        return null;
    }
}
export default accounts;