import React, { Component } from 'react'
import { View, StyleSheet, FlatList } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Text } from 'native-base';
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation';

import { deleteCart } from '../store/actions/cart';
import ListCart from '../components/UI/ListCart';
import TextBlock from '../components/UI/texts/TextBlock';
import RupiahFormat from '../components/UI/texts/RupiahFormat';

class CartScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

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
                                />
                        )}
                        />
                </Content>
                <Footer>
                    <FooterTab style={{flexDirection: 'row', backgroundColor: '#fff'}}>
                        <Container style={{width:'35%', alignItems: 'center', padding: 10}}>
                            <Text style={{textAlign: 'center', fontSize: 12, alignSelf: 'flex-start'}}>total :</Text>
                            <RupiahFormat text={this.props.total} />
                        </Container>
                        <Button bordered block style={{margin: 8,marginLeft: 0, height: '80%'}} onPress={this.checkoutHandler}>
                            <Text>checkout</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
            )
        }
        return(
                <TextBlock text='Your cart is still empty.' />

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
        deleteCart: cart => dispatch(deleteCart(cart))
    }
}


export default connect(mapState,mapDispatch)(CartScreen);