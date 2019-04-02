import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { ListItem, Icon, Text, Left, Thumbnail, Body, Right, Button } from 'native-base';

const ListCart = props => {

    const { prName, prPrice } = styles;

    return(
        <ListItem noIndent thumbnail>
            <Left>
                <Thumbnail source={props.image} />
            </Left>
            <Body>
                <Text style={prName}>
                    { props.name }
                </Text>
                <Text style={prPrice}>
                    { props.price }
                </Text>
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