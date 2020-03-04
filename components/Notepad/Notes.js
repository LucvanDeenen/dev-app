import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

import Header from './Header.js';
import NoteItems from './NoteItems.js';
import AddItem from './AddItem.js';

import styles from './local-styles.js';
import globalStyles from '../Main/styles.js';

export default function Notes(props) {
    const [items, setItems] = useState([
        { text: 'Buy coffee', key: '1' },
        { text: 'Finish chores', key: '2' },
        { text: 'Game', key: '3' },
    ])

    const removeItem = (key) => {
        setItems((prevItems) => {
            return prevItems.filter(item => item.key != key)
        })
    }

    const addItem = (text) => {
        setItems((prevItems) => {
            let newKey = (prevItems.length + 1);
            return [
                { text: text, key: newKey.toString() },
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
