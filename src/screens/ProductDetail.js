import React, { Component } from 'react';
import { StyleSheet,TextInput, Image, View, Dimensions } from 'react-native';
import { Card, CardItem, Body, Container, Content, Text, Form, Item,
     Input,Footer, Button, Icon, FooterTab } from 'native-base';
import { connect } from 'react-redux'
import InputQuantity from '../components/UI/InputQuantity';

import { addToCart } from '../store/actions/cart';

class ProductDetail extends Component {
    
    constructor(props) {
        super(props);
        
        const { product_id, description, name, image, price } = props.navigation.state.params;

        this.state = {
            control: {
                quantity: '1'
            },
            product: {
                product_id,
                name,
                description,
                price,
                image           
            }
        }

    }

    inputQtyHandler = (val) => {
        this.setState({
            control: {
                quantity: val
            }
        });
    }

    addQtyHandler = () =>  {

        const increasedVal = parseInt(this.state.control.quantity) + 1

        this.setState({
            control: {
                quantity: increasedVal.toString()
            }
        })
    }

    minQtyHandler = () => {

        const decreasedVal = parseInt(this.state.control.quantity) - 1

        this.setState({
            control: {
                quantity: decreasedVal.toString()
            }
        })
    }

    onAddCartHandler = () => {
        const {product, control} = this.state;

        this.props.addToCart(this.state.product);
        this.props.navigation.navigate('Cart', {...product, quantity: control.quantity});
    }

    render() {

        const { name, image, price, description } = this.state.product;

        return(
            <Container>
                <Content>
                    <Card style={{flex:1}}>
                        <CardItem style={styles.imgWrapper}>
                            <Image resizeMode='contain' source={image} style={styles.img} />                            
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text style={styles.prName}>
                                    {name}
                                </Text>
                                <Text style={styles.prPrice} textBreakStrategy='balanced'>
                                    {price}
                                </Text>
                                <Text style={styles.prDesc}>
                                    {description}
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <InputQuantity 
                                onMinPressed={this.minQtyHandler}
                                onPlusPressed={this.addQtyHandler}
                                value={this.state.control.quantity}
                                />
                        </CardItem>
                    </Card>
                </Content>
                <Footer>
                    <FooterTab>
                            <Button block transparent style={styles.buyButton} onPress={this.onAddCartHandler}>
                                <Text style={{color: '#FFF', fontWeight: 'bold'}}>Buy</Text>
                            </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}


const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    imgWrapper: {
        flexDirection: 'row',
        marginBottom: 12,
        width: width,
        height: 300
    },
    img: {
        flex: 1,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined
    },
    prName: {
        textTransform: 'capitalize',
        borderBottomWidth: 0.8,
        paddingBottom: 5,
        borderColor: '#c9c9c9',
        marginBottom: 12
    },
    prPrice: {
        fontSize: 13,
        color: '#676C6E'
    },
    prDesc: {
        color: '#666',
        fontSize: 11
    },
    buyButton: {
        backgroundColor: '#006494'
    }
})

mapDispatch = dispatch => {
    return {
        addToCart: item => dispatch(addToCart(item))
    }
}

export default connect(null, mapDispatch)(ProductDetail);