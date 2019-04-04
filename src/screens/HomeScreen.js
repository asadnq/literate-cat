import React, { Component } from 'react';
import { StyleSheet, View, Image, FlatList } from 'react-native';
import { Container, Card, CardItem, Text, Body, Button, Content, ListItem, Left, Right, Thumbnail, Icon } from 'native-base';
import { connect } from 'react-redux';

import RupiahFormat from '../components/UI/texts/RupiahFormat';
import OutlineButton from '../components/UI/buttons/OutlineButton';

export class HomeScreen extends Component {
    constructor() {
        super();
    }

    static navigationOptions = {
        title: 'Product List',
      };
  
    render() {
        const { products } = this.props;
        const { prImg, prName, prPrice } = styles;
    return (
        <Container>
            <FlatList
                data={products}
                keyExtractor={(item, index) => 'key'+index}
                renderItem={({item}) => (
                    <ListItem noIndent thumbnail >
                        <Left>
                            <Thumbnail style={prImg} square source={item.image} resizeMode="contain" />
                        </Left>
                        <Body>
                            <Text style={prName} numberOfLines={1}>
                                {item.name}
                            </Text>
                            <RupiahFormat text={item.price} />
                        </Body>
                        <Right>
                            <OutlineButton iconLeft small onPress={ () => this.props.navigation.navigate('ProductDetail', {
                                product_id: item.id,
                                name: item.name,
                                image: item.image,
                                price: item.price,
                                description: item.description
                            })} title='view'/>
                        </Right>
                    </ListItem>
                )}
            />
        </Container>
    )
  }
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        flex: 1,
        margin: 5
    },
    cardWrapper: {
        width: '50%',
        padding: 5
    },
    prName: {
        borderBottomWidth: .8,
        fontSize: 16,
        borderColor: '#c9c9c9',
        fontFamily: 'Lato-Regular'
    },
    prPrice: {
        fontSize: 10,
        color: '#676C6E',
        fontFamily: 'Lato-Regular'
    },
    prImg: {
        height: 78
    }

})

const mapState = state => {
    return {
        products: state.products.products
    }
}

export default connect(mapState)(HomeScreen);
