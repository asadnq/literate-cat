import React, { Component } from 'react';
import { StyleSheet,TextInput, Image, View, Dimensions } from 'react-native';
import { Card, CardItem, Body, Container, Content, Text, Form, Item,
     Input,Footer, Button, Icon, FooterTab } from 'native-base';
import { connect } from 'react-redux'

import { addToCart, addedToCart } from '../store/actions/cart';
import { IMG_URL } from '../config/api.config';
import RupiahFormat from '../components/UI/texts/RupiahFormat';
import CustomFAB from '../components/UI/buttons/CustomFAB';
import Lato from '../components/UI/texts/Lato';
import Rubik from '../components/UI/texts/Rubik';
import Raleway from '../components/UI/texts/Raleway';
import Philosopher from '../components/UI/texts/Philosopher'
import Loading from '../components/UI/loading/Loading';
import ModalLoading from '../components/UI/loading/ModalLoading';
import QuarterModal from '../components/UI/modals/QuarterModal';
import AddToCartModal from '../components/AddToCartModal';


class ProductDetail extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            control: {
                modalVisible:{
                    addToCart: false
                }
            }
        }

    }


    onAddCartHandler = (book, qty) => {
        this.props.addToCart(book, qty);
        this.setModalVisibility();
        this.props.addedToCart();
    }

    setModalVisibility = () => {
    
        this.setState((prevState) => {
            return {
                ...prevState,
                control: {
                    modalVisible:{
                        addToCart: !prevState.control.modalVisible.addToCart
                    }
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
                <QuarterModal visible={this.props.isAddedToCart}
                text="added to cart" buttonText='go to cart'
                action={() => this.props.navigation.navigate('Cart')}
                visibilityHandler={this.setQuarterModalVisibilty}/>
                <ModalLoading visible={this.props.isAddLoading ? true : false}/>
                <AddToCartModal
                    visible={this.state.control.modalVisible.addToCart}
                    visibilityHandler={this.setModalVisibility}
                    data={this.props.book}
                    addToCart={this.onAddCartHandler}
                    addedToCart={this.setQuarterModalVisibilty}
                    />
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