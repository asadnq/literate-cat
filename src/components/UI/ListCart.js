import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { ListItem, Icon, Left, Thumbnail, Body, Right, Button } from 'native-base';
import Lato from '../UI/texts/Lato';

import RupiahFormat from '../UI/texts/RupiahFormat';


const ListCart = props => {

    const { prName, prPrice } = styles;

    return(
        <ListItem noIndent thumbnail>
            <Left>
                <Thumbnail square source={props.image} />
            </Left>
            <Body>
                <Lato style={prName}>
                    { props.name }
                </Lato>
                <RupiahFormat style={prPrice} text={props.price} />
            </Body>
            <Right>
                <Button bordered danger onPress={props.actionDelete}>
                    <Icon name='trash' type='FontAwesome' size={25}/>
                </Button>
            </Right>
        </ListItem>
    )
}

const styles = StyleSheet.create({
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

export default ListCart;