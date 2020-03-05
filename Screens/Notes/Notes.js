import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Divider } from 'react-native-elements';

// Components
import Header from '../../components/Notes/Header.js';
import NoteItems from '../../components/Notes/NoteItems.js';
import AddItem from '../../components/Notes/AddItem.js';
import ItemInspect from '../../components/Notes/ItemInspect.js';

// Styling
import styles from './local-styles.js';
import globalStyles from '../../components/Main/styles.js';

export default function Notes(props) {
    const [items, setItems] = useState([
        { head: 'Buy coffee', content: 'Spending more money', key: '1' },
        { head: 'Finish chores', content: 'Do this that dut', key: '2' },
        { head: 'Game', content: 'Playing games', key: '3' },
    ])

    const [item, setItem] = useState();

    const removeItem = (key) => {
        setItems((prevItems) => {
            return prevItems.filter(item => item.key != key)
        })
    }

    const closeItem = () => {
        setItem(null);
    }

    const addItem = (text) => {
        setItems((prevItems) => {
            let newContent = 'temp';
            let newKey = (text.charAt(0) + text.charAt(1) + newContent.charAt(0) + prevItems.length);
            return [
                { head: text, content: newContent, key: newKey.toString() },
                ...prevItems
            ]
        })
    }

    const openItem = (key) => {
        items.map(listItem => {
            listItem.key == key ? setItem(listItem) : null
        })
    }

    if (props.control == 'notes') {
        return (
            <View style={styles.mainScreen}>
                <ItemInspect item={item} closeItem={closeItem} />
                <Header />
                <View style={styles.contentText}>
                    <AddItem addItem={addItem} />
                    <Divider style={{backgroundColor: '#ddd', height: 2 }}/>
                    <FlatList
                        data={items}
                        renderItem={({ item }) => (
                            <NoteItems item={item} removeItem={removeItem} openItem={openItem} />
                        )} />
                </View>
            </View>
        );
    } else {
        return null;
    }
}
