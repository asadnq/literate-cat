import React, { Component } from 'react';
import { StyleSheet, View, Image, FlatList } from 'react-native';
import { Container, Card, CardItem, Text, Body, Button, Content, ListItem, Left, Right, Thumbnail, Icon } from 'native-base';
import { connect } from 'react-redux';

import RupiahFormat from '../components/UI/texts/RupiahFormat';
import OutlineButton from '../components/UI/buttons/OutlineButton';
import CardProduct from '../components/UI/CardProduct';


export class ProductsScreen extends Component {
    constructor() {
        super();
    }

    static navigationOptions = {
        title: 'Product Card',
      };
  
    toProductDetail = (product) => {
        this.props.navigation.navigate('ProductDetail', {
            book_id: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            description: product.description
        })
    }

    render() {
    return (
        <Container>
            <FlatList
                numColumns={2}
                keyExtractor={(item, index) => 'key'+index}
                data={this.props.book}
                renderItem={({item}) => (
                    <CardProduct {...item}
                    action={this.toProductDetail.bind(this,item)}/>
                )}
            />
        </Container>
    )
  }
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})

const mapState = state => {
    return {
        book: state.book.book
    }
}

export default connect(mapState)(ProductsScreen);
