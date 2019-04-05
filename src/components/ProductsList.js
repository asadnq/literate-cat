import React, { Component } from 'react';
import { FlatList, View } from 'react-native';

import ListProduct from './UI/ListProduct';

const ProductsList = (props) => {
    return (
        <FlatList
            data={props.data}
            keyExtractor={(item, index) => 'key'+index}
            renderItem={({item}) => (
                        <ListProduct {...item}
                        action={() => props.action(item)} />) }
        />
    );
}

export default ProductsList;
