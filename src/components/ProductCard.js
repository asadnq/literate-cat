import React, { Component } from 'react'

import ProductCard from './UI/ProductCard';

export class ProductCard extends Component {
  render() {
    return (
        <Content >
            <FlatList
                data={products}
                renderItem={({item}) => (
                    <View style={styles.cardWrapper} >
                        <ProductCard 
                            image={item.image}
                            title={item.title}
                            />
                    </View>
                )}
                />
        </Content>
    )
  }
}

export default ProductCard
