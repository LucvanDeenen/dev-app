import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

import Header from './Header.js';
import NoteItems from './NoteItems.js';
import AddItem from './AddItem.js';

import styles from './local-styles.js';
import globalStyles from '../Main/styles.js';

export default function Notes(props) {
    const [items, setItems] = useState([
        { head: 'Buy coffee', content: 'Spending more money',  key: '1' },
        { head: 'Finish chores', content: 'Do this that dut', key: '2' },
        { head: 'Game', content: 'Playing games', key: '3' },
    ])

    const removeItem = (key) => {
        setItems((prevItems) => {
            return prevItems.filter(item => item.key != key)
        })
    }

    const addItem = (text) => {
        setItems((prevItems) => {
            let newContent = 'temp';
            let newKey = (text.charAt(0)+text.charAt(1)+newContent.charAt(0)+prevItems.length);
            return [
                { head: text, content: newContent, key: newKey.toString() },
                ...prevItems
            ]
        })
    }

    if (props.control == 'notes') {
        return (
            <View style={styles.mainScreen}>
                <Header />
                <View style={styles.contentText}>
                    <AddItem addItem={addItem} />
                    <FlatList
                        data={items}
                        renderItem={({ item }) => (
                            <NoteItems item={item} removeItem={removeItem} />
                        )} />
                </View>
            </View>
        );
    } else {
        return null;
    }
}
