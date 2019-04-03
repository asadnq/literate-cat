import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { ListItem, Icon, Text, Left, Thumbnail, Body, Right, Button } from 'native-base';

import RupiahFormat from '../UI/texts/RupiahFormat';
import Lato from '../UI/texts/Lato';

const ListPayment = props => {

    const { prName, prPriceSum, prQty } = styles;

    return(
        <ListItem noIndent thumbnail>
            <Left>
                <Thumbnail square source={props.image} />
            </Left>
            <Body>
                <Lato style={prName}>{ props.name }</Lato>
                <Lato style={prQty}>{props.quantity} item</Lato>
                <RupiahFormat text={props.priceSum} />
            </Body>
        </ListItem>
    )
}


const styles = StyleSheet.create({
    prName: {
        borderBottomWidth: .8,
        fontSize: 16,
        borderColor: '#c9c9c9'
    },
    prPriceSum: {
        fontSize: 14,
        color: '#676C6E'
    },
    prQty: {
        color: '#777'
    },
    prImg: {
        height: 78
    }
});

export default ListPayment;