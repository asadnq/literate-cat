import React, { Component } from 'react';
import { StyleSheet,TextInput, Image, View, Dimensions } from 'react-native';
import { Card, CardItem, Body, Container, Content, Text, Form, Item,
     Input,Footer, Button, Icon, FooterTab } from 'native-base';
import { connect } from 'react-redux'

import { addToCart } from '../store/actions/cart';
import InputQuantity from '../components/UI/InputQuantity';
import RupiahFormat from '../components/UI/texts/RupiahFormat';
import HalfBottomModal from '../components/UI/modals/HalfBottomModal';
import Lato from '../components/UI/texts/Lato';
import OutlineButton from '../components/UI/buttons/OutlineButton';
import CustomFAB from '../components/UI/buttons/CustomFAB';


class ProductDetail extends Component {
    
    constructor(props) {
        super(props);
        
        const { product_id, description, name, image, price } = props.navigation.state.params;

        this.state = {
            control: {
                quantity: '1',
                modalVisibility: false,
                priceSum: 0
            },
            product: {
                product_id,
                name,
                description,
                price,
                image,           
            }
        }

    }

    inputQtyHandler = (val) => {

        const qty = parseInt(val);
        const priceSum = this.state.product.price * qty;

        this.setState(prevState => {
            return {
                ...prevState,
                control: {
                    quantity: val.replace(/[^0-9]/g, '').toString,
                    modalVisibility: prevState.control.modalVisibility,
                    priceSum
                }
            }
        });
    }

    addQtyHandler = () =>  {

        const increasedVal = parseInt(this.state.control.quantity) + 1
        const priceSum = this.state.product.price * increasedVal;

        this.setState(prevState => {
            return {
                ...prevState,
                control: {
                    quantity: increasedVal.toString(),
                    modalVisibility: prevState.control.modalVisibility,
                    priceSum
                }
            }
        })
    }

    minQtyHandler = () => {

        const { quantity } = this.state.control;
        const decreasedVal = quantity > 1 ? parseInt(quantity) - 1 : parseInt(quantity);
        const priceSum = this.state.product.price * decreasedVal

        this.setState(prevState => {
            return {
                ...prevState,
                control: {
                    quantity: decreasedVal.toString(),
                    modalVisibility: prevState.control.modalVisibility,
                    priceSum
                }
            }
        })
    }

    onAddCartHandler = () => {
        const {product, control} = this.state;

        this.props.addToCart(product, control.quantity);
        this.props.navigation.navigate('Cart');
    }

    setModalVisibility = () => {
    
        const { control, product } = this.state;

        const priceSum = parseInt(control.quantity) * product.price;

        this.setState((prevState) => {
            return {
                ...prevState,
                control: {
                    quantity: prevState.control.quantity,
                    modalVisibility: !prevState.control.modalVisibility,
                    priceSum
                }
            }
        })
    }

    render() {

        const { name, image, price, description } = this.state.product;

        return(
            <Container>
                <HalfBottomModal
                    title='add to cart'
                    visible={this.state.control.modalVisibility}
                    visibilityHandler={this.setModalVisibility}>
                    <View style={{flexDirection: 'row',flex: 2.5}}>
                        <View style={{flex: 1}}>
                            <Image resizeMode='contain' source={image} style={styles.img} />
                        </View>
                        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around', paddingLeft: 4}}>
                            <Text>{name}</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <RupiahFormat text={price} />
                                <Text>x</Text>
                                <Text>{this.state.control.quantity}</Text>
                            </View>
                            <InputQuantity 
                                onMinPressed={this.minQtyHandler}
                                onPlusPressed={this.addQtyHandler}
                                onChangeText={this.inputQtyHandler}
                                value={this.state.control.quantity}
                                />
                        </View>
                    </View>
                    <View style={{flex: 1,flexDirection: 'row', alignSelf: 'stretch',
                    alignItems: 'flex-end',justifyContent: 'space-between'}}>
                        <RupiahFormat text={this.state.control.priceSum} style={{color: '#705E49', fontSize: 20}}/>
                        <OutlineButton style={{alignSelf: 'flex-end'}} onPress={this.onAddCartHandler} title='add'/>
                    </View>
                </HalfBottomModal>
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
                                <RupiahFormat style={styles.prPrice} text={price}/>
                                
                                <Text style={styles.prDesc} textBreakStrategy='balanced'>
                                    {description}
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                        </CardItem>
                    </Card>
                </Content>
                    <CustomFAB onPress={this.setModalVisibility}>
                        <Icon type='MaterialIcons' name='shopping-basket' style={{color: '#FFF', fontSize: 20}}/>
                    </CustomFAB>
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
        marginBottom: 12,
        fontFamily: 'Lato-Regular'
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
        borderColor: '#006494',
        margin: 8,
        height: '80%'
    }
})

mapDispatch = dispatch => {
    return {
        addToCart: (item, qty) => dispatch(addToCart(item, qty))
    }
}

export default connect(null, mapDispatch)(ProductDetail);