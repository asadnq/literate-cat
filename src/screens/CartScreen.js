import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux'

import { deleteCart } from '../store/actions/cart';
import ListCart from '../components/UI/ListCart';
import TextBlock from '../components/UI/TextBlock';

class CartScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    onDeleteCart = (id) => {
        this.props.deleteCart(id)
    }

    render() {

        if(this.props.cart.length > 0) {
        return(
            <View>
                <FlatList
                    keyExtractor={(item, index) => 'key'+item.id}
                    data={this.props.cart}
                    renderItem={({item}) => (
                        <ListCart
                            image={item.image}
                            name={item.name}
                            price={item.price}
                            actionDelete={this.onDeleteCart.bind(this, item.id)} />
                    )}
                    />
            </View>
            )
        }
        return(
                <TextBlock text='Your cart is still empty.' />

        )
    }
}

const mapState = state => {
    return {
        cart: state.cart.cart
    }
}

const mapDispatch = dispatch => {
    return {
        deleteCart: cart => dispatch(deleteCart(cart))
    }
}


export default connect(mapState,mapDispatch)(CartScreen);