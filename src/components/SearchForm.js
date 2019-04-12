import React, { Component } from 'react';
import { StyleSheet , TextInput, View } from 'react-native';
import { Item, Form, Input } from 'native-base';

const SearchForm = props => (
    <View style={styles.inputWrapper}>
        <TextInput
            style={styles.input}
            placeholder='search books...'
            onChangeText={props.onChangeText}
            value={props.value}
            numberOfLines={1}/>
    </View>
)

const styles = StyleSheet.create({
    inputWrapper: {
        height: 30,
        marginRight: 10,
        marginLeft: 10
    }, 
    input: {
        height: 30,
        padding: 0,
        borderBottomWidth: .87,
        borderColor: '#006494'
    }
})

export default SearchForm;