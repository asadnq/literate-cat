import React, { Component } from 'react'
import { View, StyleSheet, FlatList } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Text, Icon } from 'native-base';
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation';

import { deleteCart, addQuantity, subQuantity } from '../store/actions/cart';
import ListCart from '../components/UI/ListCart';
import BlockContent from '../components/UI/BlockContent';
import RupiahFormat from '../components/UI/texts/RupiahFormat';
import DefaultButton from '../components/UI/buttons/DefaultButton';
import OutlineButton from '../components/UI/buttons/OutlineButton';

class CartScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }

    static navigationOptions = {
        title: 'cart',
        tabBarOptions: {
            showLabel: true,
            activeTintColor: '#006494',
        }
    };
    addQtyHandler = (cart) =>  {
        this.props.addQty(cart);
    }

    subQtyHandler = (cart) =>  {
        this.props.subQty(cart);
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

    onDeleteCart = (id) => {
        this.props.deleteCart(id)
    }

    checkoutHandler = () => {
        const navigate = NavigationActions.navigate({
            routeName: 'Payment'
        });

        this.props.navigation.dispatch(navigate);
    }

    render() {

        if(this.props.cart.length > 0) {
        return(
            <Container>
                <Content>
                    <FlatList
                        keyExtractor={(item, index) => 'key'+item.id}
                        data={this.props.cart}
                        renderItem={({item}) => (
                            <ListCart
                                {...item}
                                actionDelete={this.onDeleteCart.bind(this, item)}
                                value={item.quantity.toString()}
                                addQty={this.addQtyHandler.bind(this, item)}
                                subQty={this.subQtyHandler.bind(this, item)}
                                />
                        )}
                        />
                </Content>
                <Footer>
                    <FooterTab style={{flexDirection: 'row', backgroundColor: '#fff'}}>
                        <Container style={{width:'35%', alignItems: 'center', padding: 10}}>
                            <Text style={{textAlign: 'center', fontSize: 12, alignSelf: 'flex-start'}}>total :</Text>
                            <RupiahFormat style={{fontSize: 18}} text={this.props.total} />
                        </Container>
                        <Container style={{padding: 8}}>
                            <OutlineButton block title='checkout' style={{height: 30,marginLeft: 0}} onPress={this.checkoutHandler} />
                        </Container>
                    </FooterTab>
                </Footer>
            </Container>
            )
        }
        return(
            <BlockContent>
                <Icon type='FontAwesome' name='cart-arrow-down' />
                <Text>Your cart is empty</Text>
                <DefaultButton style={{alignSelf: 'center', marginTop: 5}} title='shop now' onPress={() => this.props.navigation.navigate('Home')} />
            </BlockContent>

        )
    }
}

const mapState = state => {
    return {
        cart: state.cart.cart,
        total: state.cart.total
    }
}

const mapDispatch = dispatch => {
    return {
        deleteCart: cart => dispatch(deleteCart(cart)),
        addQty: (cart) => dispatch(addQuantity(cart)),
        subQty: (cart) => dispatch(subQuantity(cart))
    }
}


export default connect(mapState,mapDispatch)(CartScreen);