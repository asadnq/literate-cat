import React, { Component } from 'react';
import { StyleSheet,TextInput, Image, View, Dimensions } from 'react-native';
import { Card, CardItem, Body, Container, Content, Text, Form, Item,
     Input,Footer, Button, Icon, FooterTab } from 'native-base';
import { connect } from 'react-redux'

import { addToCart, addedToCart } from '../store/actions/cart';
import { IMG_URL } from '../config/api.config';
import InputQuantity from '../components/UI/InputQuantity';
import RupiahFormat from '../components/UI/texts/RupiahFormat';
import HalfBottomModal from '../components/UI/modals/HalfBottomModal';
import OutlineButton from '../components/UI/buttons/OutlineButton';
import CustomFAB from '../components/UI/buttons/CustomFAB';
import Lato from '../components/UI/texts/Lato';
import Rubik from '../components/UI/texts/Rubik';
import Raleway from '../components/UI/texts/Raleway';
import Philosopher from '../components/UI/texts/Philosopher'
import Loading from '../components/UI/loading/Loading';
import ModalLoading from '../components/UI/loading/ModalLoading';
import QuarterModal from '../components/UI/modals/QuarterModal';

class ProductDetail extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            control: {
                quantity: '1',
                modalVisible:{
                    addToCart: false
                },
                price_sum: 0
            }
        }

    }

    inputQtyHandler = (val) => {

        const qty = parseInt(val);
        const price_sum = this.props.book.price * qty;

        this.setState(prevState => {
            return {
                ...prevState,
                control: {
                    quantity: val.replace(/[^0-9]/g, '').toString,
                    modalVisible:{
                        addToCart: prevState.control.modalVisible.addToCart
                    },
                    price_sum
                }
            }
        });
    }

    addQtyHandler = () =>  {

        const increasedVal = parseInt(this.state.control.quantity) + 1
        const price_sum = this.props.book.price * increasedVal;

        this.setState(prevState => {
            return {
                ...prevState,
                control: {
                    quantity: increasedVal.toString(),
                    modalVisible:{
                        addToCart: prevState.control.modalVisible.addToCart
                    },
                    price_sum
                }
            }
        })
    }

    minQtyHandler = () => {

        const { quantity } = this.state.control;
        const decreasedVal = quantity > 1 ? parseInt(quantity) - 1 : parseInt(quantity);
        const price_sum = this.props.book.price * decreasedVal

        this.setState(prevState => {
            return {
                ...prevState,
                control: {
                    quantity: decreasedVal.toString(),
                    modalVisible:{
                        addToCart: prevState.control.modalVisible.addToCart
                    },
                    price_sum
                }
            }
        })
    }

    onAddCartHandler = () => {
        this.props.addToCart(this.props.book, this.state.control.quantity);
        this.setModalVisibility();
        this.props.addedToCart();
    }

    setModalVisibility = () => {
    
        const price_sum = parseInt(this.state.control.quantity) * this.props.book.price;

        this.setState((prevState) => {
            return {
                ...prevState,
                control: {
                    quantity: prevState.control.quantity,
                    modalVisible:{
                        addToCart: !prevState.control.modalVisible.addToCart
                    },
                    price_sum
                }
            }
        })
    }

    setQuarterModalVisibilty = () => {
        this.props.addedToCart();

    }

    render() {

        const { name, cover_image, price, description } = this.props.book;

        if(this.props.isLoading) {
            return <Loading />;
        }

        return(
            <Container>
                <QuarterModal visible={this.props.isAddedToCart} text="added to cart"
                action={() => this.props.navigation.navigate('Cart')} visibilityHandler={this.setQuarterModalVisibilty}/>
                <ModalLoading visible={this.props.isAddLoading ? true : false}/>
                <HalfBottomModal
                    title='add to cart'
                    visible={this.state.control.modalVisible.addToCart}
                    visibilityHandler={this.setModalVisibility}>
                    <View style={{height: 200, padding: 15}}>
                        <View style={{flexDirection: 'row', height: 120}}>
                            <View style={{flex: 1}}>
                                <Image resizeMode='contain' source={{uri: IMG_URL + cover_image}} style={styles.img} />
                            </View>
                            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around', paddingLeft: 4}}>
                                <Philosopher style={{fontSize: 18,}}>{name}</Philosopher>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between',
                                    alignItems: 'center', alignSelf: 'stretch'}}>
                                    <RupiahFormat text={this.props.book.price} />
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
                            <RupiahFormat text={this.state.control.price_sum} style={{color: '#705E49', fontSize: 20}}/>
                            <OutlineButton style={{alignSelf: 'flex-end',
                                                            borderRadius: 20, height: 30}}
                                                            onPress={this.onAddCartHandler} title='add to cart'/>
                        </View>
                    </View>
                </HalfBottomModal>
                <Content>
                    <Card style={{flex:1}}>
                        <CardItem style={styles.imgWrapper}>
                            <Image resizeMode='contain' source={{uri: IMG_URL + cover_image}} style={styles.img} />                            
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Philosopher style={styles.prName}>
                                    {name}
                                </Philosopher>
                                <RupiahFormat style={styles.prPrice} text={price}/>
                                <Raleway style={styles.prDesc}>
                                    {description}
                                </Raleway>
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
        fontSize: 20
    },
    prPrice: {
        fontSize: 13,
        color: '#676C6E'
    },
    prDesc: {
        color: '#666',
        fontSize: 11,
        margin: 2,
        textAlign: 'justify'
    },
    buyButton: {
        borderColor: '#006494',
        margin: 8,
        height: '80%'
    }
})


const mapState = state => {

    const { book, isLoading } = state.books;
    const { isAddLoading, isAddedToCart } = state.cart;
    
    return {
        book,
        isLoading,
        isAddLoading,
        isAddedToCart
    }
}

const mapDispatch = dispatch => {
    return {
        addToCart: (item, qty) => dispatch(addToCart(item, qty)),
        addedToCart: () => dispatch(addedToCart())
    }
}

export default connect(mapState, mapDispatch)(ProductDetail);