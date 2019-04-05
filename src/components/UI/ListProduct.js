import React from 'react';
import { StyleSheet, View, Image, FlatList } from 'react-native';
import { Container, Card, CardItem, Text, Body, Button, Content, ListItem, Left, Right, Thumbnail, Icon } from 'native-base';

import RupiahFormat from './texts/RupiahFormat';
import OutlineButton from './buttons/OutlineButton';

const ListProduct = props => (
    <ListItem noIndent thumbnail >
        <Left>
            <Thumbnail style={styles.prImg} square source={props.image} resizeMode="contain" />
        </Left>
        <Body>
            <Text style={styles.prName} numberOfLines={1}>
                {props.name}
            </Text>
            <RupiahFormat text={props.price} />
        </Body>
        <Right>
            <OutlineButton iconLeft small onPress={props.action} title='view'/>
        </Right>
    </ListItem>
)

const styles = StyleSheet.create({
    cardWrapper: {
        width: '50%',
        padding: 5
    },
    prName: {
        borderBottomWidth: .8,
        fontSize: 16,
        borderColor: '#c9c9c9',
        fontFamily: 'Lato-Regular'
    },
    prPrice: {
        fontSize: 10,
        color: '#676C6E',
        fontFamily: 'Lato-Regular'
    },
    prImg: {
        height: 78
    }
});


export default ListProduct;