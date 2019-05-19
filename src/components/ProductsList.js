import React, { Component } from 'react';
import { FlatList, View } from 'react-native';

import ListProduct from './UI/ListProduct';

const ProductsList = props => {
  return (
    <FlatList
      refreshing={props.refreshing}
      onRefresh={props.onRefresh}
      data={props.data}
      keyExtractor={(item, index) => 'key' + index}
      renderItem={({ item }) => (
        <ListProduct {...item} action={() => props.action(item.id)} />
      )}
      onEndReachedThreshold={0.5}
      onEndReached={props.onEndReached}
    />
  );
};

export default ProductsList;
