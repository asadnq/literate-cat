import React, { Component } from 'react';
import { StyleSheet, View, Image, FlatList } from 'react-native';
import { Container, Card, CardItem, Text, Body, Button, Content, ListItem, Left, Right, Thumbnail, Icon } from 'native-base';
import { connect } from 'react-redux';

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
                            <Text style={prPrice}>
                                {item.price}
                            </Text>
                        </Body>
                        <Right>
                            <Button bordered iconLeft small onPress={ () => this.props.navigation.navigate('ProductDetail', {
                                name: item.name,
                                image: item.image,
                                price: item.price
                            })}>
                                <Text>View</Text>
                            </Button>
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
        borderColor: '#c9c9c9'
    },
    prPrice: {
        fontSize: 10,
        color: '#676C6E'
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
