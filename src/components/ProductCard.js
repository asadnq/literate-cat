import React from 'react';
import { FlatList } from 'react-native';

import CardProduct from './UI/CardProduct';

const ProductCard = props => {
  return (
    <FlatList
      refreshing={props.refreshing}
      onRefresh={props.onRefresh}
      data={props.data}
      numColumns={2}
      keyExtractor={(item, index) => 'key' + index}
      renderItem={({ item }) => (
        <CardProduct {...item} action={() => props.action(item.id)} />
      )}
      onEndReachedThreshold={0.5}
      onEndReached={props.onEndReached}
    />
  );
};

export default ProductCard;
